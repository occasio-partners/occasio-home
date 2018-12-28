import React from 'react'

export default ({
  className,
  inProgress,
  isDone,
  inProgressText,
  isDoneText,
  children,
  ...props
}) => <button className={`progress-button ${className}`} {...props}>
  {isDone
    ? <div>{isDoneText && <span>{isDoneText}</span>}</div>
    : inProgress
      ? <div>{inProgressText && <span>{inProgressText}</span>}</div>
      : (children)
  }
</button>
