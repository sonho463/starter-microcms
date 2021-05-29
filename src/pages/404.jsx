import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const page404 = ({ location }) => {
  return (
    <Layout>
      <Seo pageTitle="ページが見つかりません" pagePath={location.pathname} />
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h3 className="text-body">
                  お探しのページがみつかりませんでした
                </h3>
                <Link to="/">ホームページへ</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default page404
