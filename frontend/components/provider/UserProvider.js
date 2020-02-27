import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { UserContext } from '../../lib/context'

const GET_ME = gql`
  {
    me {
      avatar
      name
      notifications {
        id
        title
      }
    }
  }
`

export default ({ children }) => {
  const { data } = useQuery(GET_ME)
  const user = data ? { ...data.me, isAuthenticated: !!data.me.name } : { isAuthenticated: false }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

