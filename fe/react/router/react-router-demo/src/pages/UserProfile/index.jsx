import { useParams } from 'react-router-dom'

function UserProfile() {
  const { id } = useParams()
  return (
    <>
      <h2>用户 {id}</h2>
    </>
  )
}

export default UserProfile
