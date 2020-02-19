import Header from '../components/header/Header'
import EntryForm from '../components/entry/EntryForm'
import EntryList from '../components/entry/EntryList'
import WithSidebar from '../components/sidebar/with-sidebar'

export default function Entries () {
  return <>
    <div className='container bg-white mx-auto'>
      <Header />
      <WithSidebar>
        <EntryForm />
        <EntryList group='all' />
      </WithSidebar>
    </div>
  </>
}
