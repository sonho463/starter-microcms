const { notDeepEqual } = require("assert")
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
			microcmsConfig {
				title
				subtitle
			}
      allMicrocmsPosts(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            link
          }
          previous {
            title
            link
          }
          next {
            title
            link
          }
        }
      }
      allMicrocmsCategory {
        edges {
          node {
            categorySlug
            id
            category
          }
        }
      }
    }
  `)


  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
  }

  blogresult.data.allMicrocmsPosts.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: `/blog/posts/${node.link}`,
      component: path.resolve(`./src/templates/post-template.jsx`),
      context: {
        id: node.id,
        previous,
        next,
      },
    })
  })

  const blogPostsPerPage = 4 // １ページあたりの記事数
  const blogPosts = Object.keys(blogresult.data.allMicrocmsPosts.edges).length // 記事総数
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // 記事一覧ページの数
	const blogTitle = blogresult.data.microcmsConfig.title
	const blogSubtitle = blogresult.data.microcmsConfig.subtitle

  Array.from({ length: blogPages }).forEach((_, i) => {
    // blogPosts.forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}/`,
      component: path.resolve("./src/templates/index-template.jsx"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1, //最初のページNO
        isFirst: i + 1 === 1, // 最初のページかどうか
        isLast: i + 1 === blogPages, //最後のページかどうか
				title: blogTitle,
				subtitle: blogSubtitle,
      },
    })
  })

  // カテゴリページの生成

  blogresult.data.allMicrocmsCategory.edges.forEach(({ node }) => {

    createPage({
      path: `/cat/${node.categorySlug}/`,
      component: path.resolve(`./src/templates/category-template.jsx`),
      context: {
        catName: node.category,
        catSlug: node.categorySlug,
      },
    })
  })
}
