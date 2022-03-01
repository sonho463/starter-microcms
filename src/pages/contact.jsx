import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Contact = location => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "contact-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  // getImageでイメージデータを取得して
  const image = getImage(placeholderImage)
  // gatsby-background-imageで使えるように変換（ｖ３への対応）
  const bgImage = convertToBgImage(image)

  return (
    <>
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <Seo
          pageTitle="Contact"
          pageDescription="これはコンタクトページです"
          pagepath={location.path}
        />

        <Layout>
          <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
            <header
              className="masthead"
              style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                      <h1>Contact Me</h1>
                      <span className="subheading">
                        Have questions? I have answers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </BackgroundImage>
          <>
            <div className="container">
              <div className="row">
                <div className="container mx-auto">
                  <div className="col-md-6 offset-md-3 mt-5">
										<h2>お問い合わせ</h2>
                    <form
                      acceptCharset="UTF-8"
                      action="https://getform.io/f/76aa1111-aaba-491c-be0c-fc47a12142e2"
                      method="POST"
                      target="_blank"
                    >
                      <div className="form-group">
                        <label htmlFor="exampleInputName">お名前</label>
                        <input
                          type="text"
                          name="fullname"
                          className="form-control"
                          id="exampleInputName"
                          placeholder="こちらにお名前をご入力ください。"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" required="required">
                          メールアドレス
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="こちらにEmailアドレスをご入力ください。"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          メッセージ
                        </label>
                        <textarea
                          className="form-control"
                          rows={5}
                          name="message"
                          id="message"
                          placeholder="こちらにメッセージをご入力ください。"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        送信
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <hr />
          </>
        </Layout>
      </>
    </>
  )
}

export default Contact
