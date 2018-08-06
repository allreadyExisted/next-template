import { FieldData } from 'forms-builder/dist'
import React from 'react'

interface OwnProps {
  maxLength?: number
  readOnly?: boolean
}

type ComponentProps =
  OwnProps &
  FieldData

export class TextareaField extends React.Component<ComponentProps> {
  render() {
    const { onChange, onFocus, onBlur, value, maxLength, readOnly } = this.props

    return <textarea
      maxLength={maxLength}
      value={value != null ? value : ''}
      onChange={e => onChange(e.currentTarget.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      readOnly={readOnly}
    />
  }
}