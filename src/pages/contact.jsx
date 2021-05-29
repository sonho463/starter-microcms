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
                <p>
                  Want to get in touch? Fill out the form below to send me a
                  message and I will get back to you as soon as possible!
                </p>

                <div className="container mx-auto">
									{/* このdivタグの中に、googleFormの＜送信＞からコピーした<iframe>タグを貼り付けてください */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdOPYA_XS9Ab7HBl1KcjEk3P3fDDGXj-uU6-CSUrPwPvDg2sw/viewform?embedded=true"
                    title="form"
                    width="100%"
                    height="900"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    読み込んでいます…
                  </iframe>
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
