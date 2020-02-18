import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ContentCard, { fragment } from './ContentCard'

const CONTENTS_QUERY = gql`
query getContents($group: ID!, $cursor: String) {
  group(id: $group) {
    contents(cursor: $cursor) {
      ...ContentCardFields
    }
  }
}
${fragment}
`

export default ({ group }) => {
  const { loading, error, data, fetchMore } = useQuery(CONTENTS_QUERY, {
    variables: { cursor: null, group: group }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {data.group.contents.map(content => <ContentCard key={content.id} content={content} />)}

      <button
        className='rounded shadow w-full py-4 my-8 bg-blue-500 hover:bg-blue-700 text-white'
        onClick={() =>
          fetchMore({
            variables: { cursor: data.group.contents.slice(-1)[0].createdAt },
            updateQuery: (previous, { fetchMoreResult }) => {
              return {
                ...previous,
                group: {
                  ...previous.group,
                  contents: [
                    ...previous.group.contents,
                    ...fetchMoreResult.group.contents
                  ]
                }
              }
            }
          })}
      >
        Show more contents
      </button>
    </div>
  )
}
