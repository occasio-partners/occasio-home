import React from 'react'
import FadingComponent from 'components/FadingComponent'

export default ({ children }) =>
  <FadingComponent>
    <div>
      <div className='content'>
        {children}
      </div>
      <style jsx>{`
        div {
          margin: 0 auto;
          max-width: 50em;
        }
        .content {
          background: rgba(34,34,34,0.75);
          padding: 1em;
        }
        @media screen and (min-width: 600px) {
          .content {
            padding: 2em;
            margin: 4em;
          }
        }
      `}</style>
    </div>
  </FadingComponent>
