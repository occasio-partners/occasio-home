import React, { Component } from 'react'

export default class FadingComponent extends Component {
  state = {
    mounted: false
  }

  componentDidMount () {
    // trick to make the animation work is to call the set state next run
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 1)
  }

  render () {
    return (
      <div className={`animated ${this.state.mounted ? 'mounted' : ''}`}>
        {this.props.children}
        <style jsx>{`
          .animated {
            opacity: 0;
            visibility: hidden;
            transition: all 0.8s ease-in;
          }
          .animated.mounted {
            opacity: 1;
            visibility: visible;
          }
        `}</style>
      </div>
    )
  }
}
