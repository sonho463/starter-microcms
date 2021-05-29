import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = location => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 600
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
          pageTitle="About"
          pageDescription="これはアバウトページです"
          pagepath={location.path}
        />

        <Layout>
          {/* Page Header*/}
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
          >
            <header
              className="masthead"
              style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                      <h1>About Me</h1>
                      <span className="subheading">This is what I do.</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </BackgroundImage>
          {/* Main Content*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe nostrum ullam eveniet pariatur voluptates odit, fuga
                  atque ea nobis sit soluta odio, adipisci quas excepturi maxime
                  quae totam ducimus consectetur?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  praesentium recusandae illo eaque architecto error,
                  repellendus iusto reprehenderit, doloribus, minus sunt.
                  Numquam at quae voluptatum in officia voluptas voluptatibus,
                  minus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  consequuntur magnam, excepturi aliquid ex itaque esse est vero
                  natus quae optio aperiam soluta voluptatibus corporis atque
                  iste neque sit tempora!
                </p>
              </div>
            </div>
          </div>
          <hr />
        </Layout>
      </>
    </>
  )
}

export default About
