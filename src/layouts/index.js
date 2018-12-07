import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"


const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
          
        
        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DefaultLayout
