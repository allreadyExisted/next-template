import React from 'react'
import { Form } from '../../components/form'
import theme from './theme.css'

export default class Home extends React.Component {
  render() {
    return <section className={theme.wrap}>
      <Form />
    </section>
  }
}