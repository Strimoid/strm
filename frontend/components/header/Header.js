import { useQuery } from '@apollo/react-hooks'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'
import gql from 'graphql-tag'

const GET_ME = gql`
    {
        me {
            name
            notifications {
              title
            }
        }
    }
`

function Header ({ token }) {
  const { data } = useQuery(GET_ME)

  return (
    <header className='w-full bg-blue-600 text-blue-500 px-4 pt-4 pb-0 mb-4 flex'>
      <Link href='/'>
        <a className='bg-white px-4 py-2 mr-4'>
          <FormattedMessage id='header.contents' defaultMessage='Contents' />
        </a>
      </Link>
      <Link href='/entries'>
        <a className='bg-white px-4 py-2'>
          <FormattedMessage id='header.entries' defaultMessage='Entries' />
        </a>
      </Link>

      <div className='ml-auto flex'>
      {data && data.me.name &&
        <div className='bg-white px-4 py-2 mr-4 dropdown'>
          <div>🔔</div>
          <div className='bg-white p-4 rounded-lg absolute right-0 shadow-xl dropdown-menu'>
            {data.me.notifications.map(n => <div className='text-sm text-gray-700 py-2 border-gray-200 border-b last:border-b-0'>{n.title}</div>)}
          </div>
        </div>
      }

      {data && data.me.name
        ? <a className='bg-white px-4 py-2'>{data.me.name}</a>
        : <Link href='/sign-in'><a className='bg-white px-4 py-2'><FormattedMessage id='header.sign-in' defaultMessage='Sign in' /></a></Link>}
      </div>

    </header>
  )
}

export default Header
