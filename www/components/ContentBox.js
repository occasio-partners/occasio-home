import React from 'react'

export default ({ children }) =>
  <div className='container'>
    <div className='content'>
      {children}
    </div>
    <style jsx>{`
      .container {
        position: absolute;
        width: 50%;
        height: 20%;
        top: 30%;
        left: 30%;
        margin: -100px 0px 0px -100px;
      }
      .content {
        position: relative;
        z-index: 100;
        padding: 20px;
        background: rgba(34,34,34,0.75);
      }
    `}</style>
  </div>
