import Link from 'next/link'
import FormattedRelative from '../intl/FormattedRelative'
import { FormattedMessage } from 'react-intl'
import gql from 'graphql-tag'

export const fragment = gql`
fragment ContentCardFields on Content {
    id
    createdAt
    title
    description
    thumbnail
    uv
    dv
    comments_count
    group {
      urlname
    }
    user {
      name
      avatar
    }
  }
`

export default ({ content }) => (
  <div className='rounded overflow-hidden shadow-sm first:pt-0 px-4 py-6 flex w-full text-sm'>
    <div className='flex-none flex flex-col mr-4'>
      <button className='rounded w-16 h-8 border hover:bg-green-100'>
        {content.uv} <span className='font-black text-green-700'>￪</span>
      </button>
      <button className='rounded w-16 h-8 border mt-2 hover:bg-red-100'>
        {content.dv} <span className='font-black text-red-700'>￬</span>
      </button>
    </div>

    {content.thumbnail &&
      <div className='flex-none mr-4'>
        <img className='w-32 h-24 rounded' src={`https://strm.pl/i/200x150/thumbnails/${content.thumbnail}`} />
      </div>}

    <div>
      <h3 className='text-base font-medium'>
        <Link href='/c/[id]' as={`/c/${content.id}`}>
          <a>{content.title}</a>
        </Link>
      </h3>
      <p className='text-gray-700 mt-2'>{content.description}</p>
      <p className='text-gray-600 mt-2 text-xs'>
        <FormattedMessage
          id="content.comments_count"
          defaultMessage="{count, plural, one {# comment} other {# comments}}"
          values={{
            count: content.comments_count
          }}
        /> | <FormattedMessage
          id="content.added"
          defaultMessage="added"
        /> <FormattedRelative date={content.createdAt} />
      </p>
    </div>
  </div>
)
