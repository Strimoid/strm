export default function Notifications({ notifications }) {
  return (
    <div className='bg-white px-4 py-2 mr-4 dropdown'>
      <div>🔔</div>
      <div className='bg-white p-4 rounded-lg absolute right-0 shadow-xl dropdown-menu'>
        {notifications.map(n =>
          <div key={n.id} className='text-sm text-gray-700 py-2 border-gray-200 border-b last:border-b-0'>
            {n.title}
          </div>
        )}
      </div>
    </div>
  )
}
