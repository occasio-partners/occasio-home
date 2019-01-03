import React from 'react'

export default ({
  className,
  inProgress,
  isDone,
  inProgressText,
  isDoneText,
  children,
  ...props
}) => <React.Fragment>
  <button className={className} {...props}>
    {isDone
      ? <div>{isDoneText && <span>{isDoneText}</span>}</div>
      : inProgress
        ? <div>{inProgressText && <span>{inProgressText}</span>}</div>
        : (children)
    }
  </button>
  <style jsx>{`
    button {
      -moz-appearance: none;
      -webkit-appearance: none;
      border: none;
      cursor: pointer;
      display: inline-block;
      font-family: sans-serif;
      font-size: 1rem;
      font-weight: 800;
      margin: 1em;
      padding: 1em 3em;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: background 250ms ease-in-out,
                  transform 150ms ease;
    }
    button:hover, button:focus {
      background: darkgrey;
    }
    button:focus {
      outline: 1px solid grey;
      outline-offset: -4px;
    }
    button:active {
      transform: scale(0.99);
    }
  `}</style>
</React.Fragment>
