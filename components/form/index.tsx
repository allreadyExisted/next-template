import { SendFormRequestDTO } from 'api/send-mail'
import { formBuilder } from 'forms-builder'
import React from 'react'
import { api } from '../../api'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/form/text-field'
import { TextareaField } from '../../ui/form/textarea-field'

export class Form extends React.Component {
  private form = formBuilder<SendFormRequestDTO>(
    {
      name: {
        validate: value => !value && 'required'
      },

      lastName: {
        validate: value => !value && 'required'
      },

      email: {
        validate: value => !value && 'required'
      },

      mobileNumber: {
        validate: value => !value && 'required'
      },

      message: {
        validate: value => !value && 'required'
      }
    })
    .configure({
      submit: values => {
        api.sendMail.send(values)
      }
    })
    .build(this)

  render() {
    const { fields, handleSubmit } = this.form
    return <form method="post" onSubmit={handleSubmit}>
      <TextField {...fields.name} />
      <TextField {...fields.lastName} />
      <TextField {...fields.email} />
      <TextField {...fields.mobileNumber} />
      <TextareaField {...fields.message} />
      <Button>Send</Button>
    </form>
  }
}