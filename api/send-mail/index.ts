import fetch from 'isomorphic-unfetch'

export interface SendFormRequestDTO {
  name: string
  mobileNumber: string
  lastName: string
  email: string
  message: string
}

const send = (request: SendFormRequestDTO) =>
  fetch(`api/callback`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })

// tslint:disable-next-line:no-default-export
export default {
  send
}
