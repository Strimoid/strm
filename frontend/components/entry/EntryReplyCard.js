import EntryCardHeader from './EntryCardHeader'

export default ({ reply }) => (
  <div className='pl-4 mt-4 w-full flex'>
    <div className='flex-none'>
      <img className='h-10 w-10' src={`https://strm.pl/i/avatars/${reply.user.avatar}`} />
    </div>

    <div className='ml-4 flex-grow'>
      <EntryCardHeader entry={reply} />

      <p dangerouslySetInnerHTML={{ __html: reply.text }} />
    </div>
  </div>
)
