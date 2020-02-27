import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'

const GROUPS_QUERY = gql`
  {
    popularGroups {
      avatar
      name
      urlname
    }
  }
`

export default function GroupsSidebar() {
  const { loading, error, data } = useQuery(GROUPS_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      {data.popularGroups.slice(0, 30).map(group =>
        <Link key={group.urlname} href='/g/[gid]' as={`/g/${group.urlname}`}>
          <a className="block mb-2 text-gray-700 hover:text-blue-500">
            {group.avatar ? <img className="w-4 h-4 mr-2 rounded-full inline" src={`https://strm.pl/i/groups/${group.avatar}`} /> : ''}
            {group.urlname}
          </a>
        </Link>
      )}
    </>
  )
}
