import Header from '../components/header/Header'
import EntryForm from '../components/entry/EntryForm'
import EntryList from '../components/entry/EntryList'
import WithSidebar from '../components/sidebar/WithSidebar'
import { useUserContext} from '../lib/context'

export default function Entries () {
  const user = useUserContext()

  return <>
    <div className='container bg-white mx-auto'>
      <Header />
      <WithSidebar>
        { user.isAuthenticated ? <EntryForm /> : null}
        <EntryList group='all' />
      </WithSidebar>
    </div>
  </>
}
