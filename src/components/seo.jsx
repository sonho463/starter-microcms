import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
            lang
            siteUrl
            locale
            fbappid
          }
        }
      }
    `
  )

  const title = props.pageTitle
    ? `${props.pageTitle} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  const description = props.pageDescription || site.siteMetadata.description
  const url = props.pagepath
    ? `${site.siteMetadata.siteUrl}${props.pagepath}`
    : site.siteMetadata.siteUrl
  const imgurl = props.pageimg
    ? `${site.siteMetadata.siteUrl}${props.pageimg}`
    : `${site.siteMetadata.siteUrl}/thumb.png`
  const imgw = props.pageimgw || 1280
  const imgh = props.pageimgh || 640

  return (
    <Helmet>
      <html lang={site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={site.siteMetadata.locale} />
      <meta property="fb:app_id" content={site.siteMetadata.fbappid} />

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />

      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
