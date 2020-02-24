import FormattedRelative from '../intl/FormattedRelative'

export default ({ entry }) => (
  <div className='mb-2 border-b'>
    <span className='text-blue-600'>{entry.user.name}</span>
    {entry.group ? <span className='ml-4 text-gray-500'>{entry.group.urlname}</span> : ''}
    <span className='float-right' alt={entry.createdAt}>
      <FormattedRelative date={entry.createdAt} />
    </span>
  </div>
)
