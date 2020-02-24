import EntryCardHeader from './EntryCardHeader'
import EntryReplyCard from './EntryReplyCard'
import EntryReplyForm from './EntyReplyForm'
import { useState } from 'react'

export default ({ entry }) => {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className='rounded overflow-hidden shadow-md my-2 px-4 py-4 flex w-full text-sm'>
    <div className='flex-none'>
      <img className='h-10 w-10' src={`https://strm.pl/i/avatars/${entry.user.avatar}`} />
    </div>

    <div className='ml-4 flex-grow'>
      <EntryCardHeader entry={entry} />

      <p dangerouslySetInnerHTML={{ __html: entry.text }} />

      <p className='text-xs text-blue-400 cursor-pointer mt-2'>
        <a onClick={() => setIsReplying(!isReplying)}>reply</a>
      </p>

      {entry.replies.map(reply => (
        <EntryReplyCard key={reply.id} reply={reply} />
      ))}

      {isReplying ? <div className='mt-4'><EntryReplyForm entry={entry} /></div> : ''}
    </div>
  </div>
  )
}

