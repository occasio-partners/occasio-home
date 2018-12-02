import React from 'react'

export default class ProgressButton extends React.Component {
  state = {
    buttonWidth: 'auto'
  }

  componentDidMount () {
    this.setState({
      buttonWidth: 5 + 'px'
    })
  }

  render () {
    const {
      className,
      inProgress,
      isDone,
      inProgressText,
      isDoneText,
      children,
      ...props
    } = this.props

    return (
      <button {...props} className={`progress-button ${className}`}>
        {isDone ? (
          <div className='f aic jcc'>
            {isDoneText && <span className='mr05'>{isDoneText}</span>}
          </div>
        ) : (
          inProgress ? (
            <div className='f aic jcc'>
              {inProgressText && <span className='mr05'>{inProgressText}</span>}
            </div>
          ) : (
            children
          )
        )}
      </button>
    )
  }
}
