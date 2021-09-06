import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../styles/components/header.styles"

const Header = ({ siteTitle }) => (
  <header css={styles.header}>
    <div className="header-container">
      <h1 className="site-title">
        <Link
          to="/"
          className="site-title__link"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
