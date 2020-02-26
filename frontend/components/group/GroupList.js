import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GroupCard from './GroupCard'

const GET_GROUPS = gql`
  query getGroups($cursor: String) {
    groups(cursor: $cursor) {
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

export default () => {
  const { loading, error, data, fetchMore } = useQuery(GET_GROUPS, {
    variables: { cursor: null }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      <div class='grid grid-cols-1 xl:grid-cols-2'>
        {data.groups.map(group => <GroupCard key={group.urlname} group={group} />)}
      </div>

      <button
        className='rounded shadow w-full py-4 my-8 bg-blue-500 hover:bg-blue-700 text-white'
        onClick={() =>
          fetchMore({
            variables: { cursor: data.groups.slice(-1)[0].createdAt },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const previousGroups = previousResult.groups
              const newGroups = fetchMoreResult.groups
              const newCursor = newGroups.slice(-1)[0].createdAt

              return {
                cursor: newCursor,
                groups: [...previousGroups, ...newGroups],
                __typename: previousGroups.__typename
              }
            }
          })}
      >
        Show more groups
      </button>
    </div>
  )
}
