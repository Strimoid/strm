import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'
import Notifications from './Notifications'
import { GroupContext, UserContext } from '../../lib/context'

function Header() {
  const group = useContext(GroupContext)
  const user = useContext(UserContext)

  return (
    <header className='w-full bg-blue-600 text-blue-500 px-4 pt-4 pb-0 mb-4 flex'>
      <Link href={group ? '/g/[gid]' : '/'} as={group ? `/g/${group.urlname}` : '/'}>
        <a className='bg-white px-4 py-2 mr-4'>
          <FormattedMessage id='header.contents' defaultMessage='Contents' />
        </a>
      </Link>
      <Link href={group ? '/g/[gid]/entries' : '/entries'} as={group ? `/g/${group.urlname}/entries` : '/entries'}>
        <a className='bg-white px-4 py-2'>
          <FormattedMessage id='header.entries' defaultMessage='Entries' />
        </a>
      </Link>

      <div className='ml-auto flex'>
        {user.isAuthenticated && <Notifications notifications={user.notifications} />}

        {user.isAuthenticated
          ? <a className='bg-white px-4 py-2'>{user.name}</a>
          : <Link href='/sign-in'>
            <a className='bg-white px-4 py-2'>
              <FormattedMessage id='header.sign-in' defaultMessage='Sign in' />
            </a>
          </Link>
        }
      </div>
    </header>
  )
}

export default Header
