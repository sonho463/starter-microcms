import React from "react"
import { graphql, Link } from "gatsby"
import { htmlToText } from "html-to-text"

import Back from "../components/background"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CategoryList from "../components/category-list"

const Home = ({ data, pageContext }) => {
  const prev = pageContext.currentPage + 1
  const next = pageContext.currentPage - 1

  return (
    <>
      <Seo />

      <Layout>
        <Back>
          <header className="masthead">
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>{pageContext.title}</h1>
                    <span className="subheading">{pageContext.subtitle}</span>
                  </div>
                  <CategoryList key="node.id" />
                </div>
              </div>
            </div>
          </header>
        </Back>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="clearfix">
                <Pager
                  currentPage={pageContext.currentPage}
                  prev={prev}
                  next={next}
                  isFirst={pageContext.isFirst}
                  isLast={pageContext.isLast}
                />
              </div>

              {data.allMicrocmsPosts.edges.map(({ node }) => {
                const author = node.author || data.microcmsConfig.defaultAuthor
                const article = node.article || "no article"
                const textData = htmlToText(article, {
                  tags: {
                    a: { options: { ignoreHref: true } },
                    img: { format: "skip" },
                  },
                  limits: { ellipsis: "...", maxInputLength: 200 },
                })
                const description = node.description || `${textData}...`
                const category = node.category
                  ? node.category.category
                  : "カテゴリ未設定"
                const categorySlug = node.category
                  ? `/cat/${node.category.categorySlug}/`
                  : "/"

                return (
                  <div key={node.id}>
                    <div className="post-preview">
                      <Link to={`/blog/posts/${node.link}`}>
                        <h2 className="post-title">{node.title}</h2>
                        <h3 className="post-subtitle">{description}</h3>
                      </Link>
                      <p className="post-meta">
                        Posted by
                        <span>{author}</span>
                        <br />
                        <Link to={categorySlug}>カテゴリ：{category}</Link>
                        <br />
                        {node.updatedAtJP}
                      </p>
                    </div>
                    <hr />
                  </div>
                )
              })}
              <hr />
              <Pager
                currentPage={pageContext.currentPage}
                prev={prev}
                next={next}
                isFirst={pageContext.isFirst}
                isLast={pageContext.isLast}
              />
            </div>
          </div>
        </div>
        <hr />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsPosts(
      sort: { order: DESC, fields: updatedAt }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          link
          author
          updatedAtJP: updatedAt(formatString: "YYYY/MM/DD")
          updatedAt
          description
          article
          category {
            category
            categorySlug
          }
        }
      }
    }
    microcmsConfig {
      defaultAuthor
    }
  }
`

export default Home
