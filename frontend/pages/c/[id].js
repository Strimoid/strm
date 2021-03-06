import Header from '../../components/header/Header'
import ContentCard, { fragment } from '../../components/content/ContentCard'

import CommentCard from '../../components/content/CommentCard'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_CONTENT = gql`
  query getContent($id: String) {
    content(id: $id) {
      ...ContentCardFields
      comments {
        id
        createdAt
        text
        user {
          avatar
          name
        }
        replies {
          id
          createdAt
          text
          user {
            avatar
            name
          }
        }
      }
    }
  }
  ${fragment}
`

export default function Content () {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: { id }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <ContentCard content={data.content} />

      <div className='px-4 py-4 mb-4'>
        <h2 className='text-xl mb-2'>Comments</h2>

        {data.content.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
}
