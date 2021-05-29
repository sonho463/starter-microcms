import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline d-flex justify-content-center">
              <li>
                <SnsLink
                  href="https://twitter.com/horumont"
                  className="list-inline-item"
                >
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faCircle} size="2x" />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      inverse
                      size="1x"
                      transform="right-6"
                    />
                  </span>
                </SnsLink>
              </li>
              <li>
                <SnsLink
                  href="https://facebook.com/horumont"
                  className="list-inline-item"
                >
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faCircle} size="2x" />
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      inverse
                      size="1x"
                      transform="right-6"
                    />
                  </span>
                </SnsLink>
              </li>
              <li>
                <SnsLink
                  href="https://github.com/sonho463"
                  className="list-inline-item"
                >
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon={faCircle} size="2x" />
                    <FontAwesomeIcon
                      icon={faGithub}
                      inverse
                      size="1x"
                      transform="right-6"
                    />
                  </span>
                </SnsLink>
              </li>
            </ul>
            <p className="copyright text-muted">
              Copyright © HorumonT's Blog 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SnsLink = styled.a`
  margin: 20px;
`

export default Footer
