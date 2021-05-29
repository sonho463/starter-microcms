import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const BgImage = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "top-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  // getImageでイメージデータを取得
  const image = getImage(placeholderImage)
  // gatsby-background-imageで使えるように変換（ｖ３への対応）
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  )
}

export default BgImage
