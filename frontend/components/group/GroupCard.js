import FormattedRelative from '../intl/FormattedRelative'
import Link from 'next/link'

export default ({ group }) => (
  <div className='p-4 m-2 border rounded flex'>
    {group.avatar ?
      <div className='flex-none'>
        <img className='w-20 h-20 mr-4' src={`https://strm.pl/i/groups/${group.avatar}`} />
      </div>
    : ''}
    <div>
      <h2>
        <Link href={`/g/${group.urlname}`}>
          <a>
            {group.name} <span className='text-gray-400'>[g/{group.urlname}]</span>
          </a>
        </Link>

      </h2>
      <p className='text-sm'>{group.description}</p>
      <p className='mt-1 text-sm text-gray-500'>Created <FormattedRelative date={group.createdAt} /> by {group.creator.name}</p>
    </div>
  </div>
)
