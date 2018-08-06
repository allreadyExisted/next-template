import React from 'react'
import theme from './theme.css'

interface OwnProps {}

export class Button extends React.Component<OwnProps> {
  render() {
    const { children } = this.props
    return <button className={theme.btn}>
      {children}
    </button>
  }
}