export default (props) => (
  <div>
    <textarea className='w-full border rounded p-4' placeholder='Add new entry...' />

    <div className='flex justify-end mt-1'>
      <input type='text' className='border rounded px-4 mr-4' placeholder='Group' />
      <button className='btn btn-primary float-right'>Add</button>
    </div>
  </div>
)
