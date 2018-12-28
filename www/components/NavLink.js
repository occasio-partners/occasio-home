import { withRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

export default withRouter(
  ({ href, name, router }) =>
    <React.Fragment>
      <Link prefetch href={href} passHref>
        <a>{name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          color: #303030;
          font: calc(5px + 1vw) menlo;
          font-weight: bold;
          text-align: center;
          padding: 2% 4% 2% 4%;
          text-decoration: none;
          position: relative;
          top: 50%;
          transform: translate(0%, -50%);
          background: ${href === router.pathname ? 'white' : 'transparent'};
        }
        a:hover {
          color: red;
        }
      `}</style>
    </React.Fragment>
)
