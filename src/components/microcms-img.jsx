import React from "react"
import styled from "styled-components"

const MicroCmsImg = props => {
  const ImgWrapper = styled.img`
    width: 100%;
    min-width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
  const { url } = props
  let array = Object.values(props)
  let param = ""
  array.map(function (a) {
    if (array.indexOf(a) !== 0) {
      if (array.indexOf(a) === 1) {
        param = `?${a}`
      } else {
        param = `${param}&${a}`
      }
    }
    return param
  })
  return (
    <>
      <ImgWrapper src={url + param} alt="" />
    </>
  )
}

export default MicroCmsImg
