import FormattedRelative from '../intl/FormattedRelative'

export default ({ group }) => (
  <div className='p-4 m-2 border rounded'>
    <h2>{group.name} <span className='text-gray-400'>[g/{group.urlname}]</span></h2>
    <p className='text-sm'>{group.description}</p>
    <p className='mt-1 text-sm text-gray-500'>Created <FormattedRelative date={group.createdAt} /> by {group.creator.name}</p>
  </div>
)
