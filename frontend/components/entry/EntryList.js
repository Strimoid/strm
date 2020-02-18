import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import EntryCard from './EntryCard'

const ENTRIES_QUERY = gql`
  query getEntries($group: ID!, $cursor: String) {
    group(id: $group) {
      entries(cursor: $cursor) {
        id
        text
        createdAt
        uv
        dv
        group {
          urlname
        }
        user {
          name
          avatar
        }
        replies {
          id
          text
          createdAt
          user {
              name
              avatar
          }
        }
      }
    }
  }
`

export default ({ group }) => {
  const { loading, error, data, fetchMore } = useQuery(ENTRIES_QUERY, {
    variables: { cursor: null, group: group }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {data.group.entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}

      <button
        className='rounded shadow w-full py-4 my-8 bg-blue-500 hover:bg-blue-700 text-white'
        onClick={() =>
          fetchMore({
            variables: { cursor: data.group.entries.slice(-1)[0].createdAt },
            updateQuery: (previous, { fetchMoreResult }) => {
              return {
                ...previous,
                group: {
                  ...previous.group,
                  entries: [...previous.group.entries, ...fetchMoreResult.group.entries]
                }
              }
            }
          })}
      >
        Show more entries
      </button>
    </div>
  )
}
