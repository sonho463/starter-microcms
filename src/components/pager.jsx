import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Pager = props => {
  const { currentPage, isLast, isFirst, prev, next } = props

  return (
    <>
      {/* Pager*/}
      <PageNation>
        {!isLast ? (
          <Link className="btn btn-dark" to={`/${prev}/`} rel="prev">
            ←　Old
          </Link>
        ) : (
          <div className="btn btn-secondary">Oldest</div>
        )}
        {!isFirst ? (
          <Link
            className="btn btn-dark"
            to={currentPage === 2 ? `/` : `/${next}/`}
            rel="next"
          >
            New →
          </Link>
        ) : (
          <div className="btn btn-secondary">Newest</div>
        )}
      </PageNation>
    </>
  )
}

const PageNation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default Pager
