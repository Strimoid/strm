import Header from '../../../components/header/Header'
import EntryForm from '../../../components/entry/EntryForm'
import EntryList from '../../../components/entry/EntryList'
import { useRouter } from 'next/router'

export default function Entries () {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <div className='px-4'>
        <EntryForm />
        <EntryList group={id} />
      </div>
    </div>
  )
}
