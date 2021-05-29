import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const CategoryList = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMicrocmsCategory {
          edges {
            node {
              id
              category
              categorySlug
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Heading>カテゴリリスト</Heading>

      <CategoryMenu>
        {data.allMicrocmsCategory.edges.map(({ node }) => {
          return (
              <li key={node.id}>
                <Link to={`/cat/${node.categorySlug}`}>
                  <p >{node.category}</p>
                </Link>
              </li>          )
        })}
      </CategoryMenu>
    </>
  )
}

const Heading = styled.h3`
  color: #fff;
  margin: 0.3em;
`

const CategoryMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(51, 51, 51, 0.7);
  a {
    color: white;
  }
  p {
    margin: 0;
  }
  li {
    line-height: 0.8;
    list-style: none;
    padding: 0 0.5em;
    margin: 0;
  }
`

export default CategoryList
