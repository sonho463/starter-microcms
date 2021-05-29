import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import Layout from "../components/layout"
import MicroCmsImage from "../components/microcms-img"

export default function Home({ data, pageContext }) {
  const article = data.microcmsPosts.article
  const author = data.microcmsPosts.author
    ? data.microcmsPosts.author
    : "Dそんほんす"

  //カテゴリ未設定のときのデフォルト設定
  const category = data.microcmsPosts.category
    ? data.microcmsPosts.category.category
    : "カテゴリ未設定"
  const categorySlug = data.microcmsPosts.category
    ? `/cat/${data.microcmsPosts.category.categorySlug}/`
    : "/"

  //　アイキャッチ画像未設定のときデフォルト画像設定
  const url = data.microcmsPosts.eye_catch
    ? data.microcmsPosts.eye_catch.url
    : "https://images.microcms-assets.io/assets/a20dd30d3f4d43d8814295dae8cee134/b6697014dafc49e29be207d11715c62a/default.png"

  const ArticleWrapper = styled.div`
    & img {
      width: 80%;
    }
  `

  return (
    <>

      <Seo />

      <Layout>
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <Seo
            pagetitle="PostPage"
            pageDescription="これは投稿ページ。次にcreatePageで動的に生成します"
          />

          <header
            className="masthead"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <MicroCmsImage
              url={url}
              compress="auto=compress"
              format="auto=format"
              ar="ar=2:1&fit=crop&fp-y=0.5&fp-x=0.5"
            />
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="post-heading">
                    <h1>{data.microcmsPosts.title}</h1>
                    <span className="meta">
                      Posted by
                      {author}
                      on {data.microcmsPosts.updatedAtJP}
                    </span>
                    <span className="meta">
                      カテゴリ：
                      <Link to={categorySlug}>{category}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ArticleWrapper
                    dangerouslySetInnerHTML={{
                      __html: article,
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
          <hr />

          {pageContext.previous && (
            <Link
              className="btn btn-primary d-block mx-auto"
              to={`/blog/posts/${pageContext.previous.link}/`}
              rel="prev"
            >
              　{pageContext.previous.title}　＞＞＞ NEW
            </Link>
          )}
          {pageContext.next && (
            <Link
              className="btn btn-primary d-block mx-auto mb-1"
              to={`/blog/posts/${pageContext.next.link}/`}
              rel="next"
            >
              OLD ＜＜＜　{pageContext.next.title}
            </Link>
          )}
        </>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsPosts(id: { eq: $id }) {
      title
      updatedAtJP: updatedAt(formatString: "YYYY/MM/DD")
      updatedAt
      link
      article
      author
      eye_catch {
        url
      }
      category {
        category
        categorySlug
      }
    }
  }
`
