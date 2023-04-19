import withAuth from '@/hoc/withAuth'
import { useSession } from 'next-auth/react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

function Profile() {
  const { data: { user } } = useSession()

  return (
    <Form>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" placeholder="Peter" defaultValue={user.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="peter@gmail.com" defaultValue={user.email} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export async function getStaticProps() {

  // const { data } = await axios({
  //   method: 'GET',
  //   url: `http://localhost:3000/api/user/${session.id}`
  // })
}

export default withAuth(Profile)
