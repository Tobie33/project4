import withAuth from '@/hoc/withAuth'
import { useSession } from 'next-auth/react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Profile() {
  const { data: { user } } = useSession()

  return (
    <div id="profile" className="d-flex flex-column justify-content-center m-5">
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" placeholder="Peter" defaultValue={user.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="peter@gmail.com" defaultValue={user.email} />
        </Form.Group>
        <Button variant="primary bg-black" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default withAuth(Profile)
