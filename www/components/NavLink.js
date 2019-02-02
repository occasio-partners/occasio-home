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
          background: ${href === router.pathname ? 'white' : 'transparent'};
          color: #303030;
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.5em 1em;
          text-align: center;
          text-decoration: none;
          border-radius: 0.5em;
        }
        a:hover {
          color: red;
        }
        @media screen and (min-width: 600px) {
          a {
            padding: 1em 2em;
          }
        }
      `}</style>
    </React.Fragment>
)
