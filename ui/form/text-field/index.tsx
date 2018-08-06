import { FieldData } from 'forms-builder'
import React from 'react'
import theme from './theme.css'

interface OwnProps { }

type ComponentProps =
  OwnProps &
  FieldData<string>

export class TextField extends React.Component<ComponentProps> {
  render() {
    const { value, label, onFocus, onBlur } = this.props

    return <>
      {label &&
        <div className={theme.label}>
          {label}
        </div>}
      <input
        className={theme.input}
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={this.onChange}
        value={value != null ? value : ''}
      />
    </>
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value)
  }
}