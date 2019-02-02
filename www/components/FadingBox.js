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
          border-radius: 0.15em;
        }
        .content {
          background: rgba(38, 34, 98, 0.75);
          padding: 0.6em;
        }
        @media screen and (min-width: 600px) {
          .content {
            padding: 1em;
            margin: 5vh;
          }
        }
      `}</style>
    </div>
  </FadingComponent>
