import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { GroupContext } from '../../lib/context'

const GET_GROUP = gql`
  query getGroup($groupId: ID!) {
    group(id: $groupId) {
      avatar
      name
      urlname
      description
      creator {
          name
      }
      createdAt
    }
  }
`

export default ({ children }) => {
  const router = useRouter()
  const { gid } = router.query

  let group = null

  if (gid) {
    const { data } = useQuery(GET_GROUP, {
      variables: { groupId: gid }
    })
    group = data ? data.group : null
  }

  return (
    <GroupContext.Provider value={group}>
      {children}
    </GroupContext.Provider>
  )
}
