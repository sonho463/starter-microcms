const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `そんほんすのブログ`,
    siteUrl: "https://starter-microcms-gc.netlify.app/",
    description: `これは、GatsbyとmicroCMSで作ったブログです。`,
    lang: `ja`,
		locale: `ja_jp`,
		fbappid: `510836253386080`,
		
  },
  /* Your site config here */
  plugins: [
		{
			resolve: 'gatsby-plugin-preconnect',
			options: {
				domains: ['https://fonts.googleapis.com'],
			},
		},
		{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora:400,400italic,700,700italic`,
          `pen+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800`,

        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: "posts",
          },
					{
						endpoint: "category",
					},
					{
						endpoint: "config",
						format: "object",
					},
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
  ],
}
