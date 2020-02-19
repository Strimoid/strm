import Header from '../../../components/header/Header'
import EntryForm from '../../../components/entry/EntryForm'
import EntryList from '../../../components/entry/EntryList'
import WithSidebar from '../../../components/sidebar/with-sidebar'
import { useRouter } from 'next/router'

export default function Entries () {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <WithSidebar>
        <EntryForm />
        <EntryList group={id} />
      </WithSidebar>
    </div>
  )
}
