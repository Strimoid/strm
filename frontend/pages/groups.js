import Header from '../components/header/Header'
import GroupList from '../components/group/GroupList'

export default function Entries () {
  return <>
    <div className='container bg-white mx-auto'>
      <Header />
      <div className='px-4'>
        <GroupList />
      </div>
    </div>

  </>
}
