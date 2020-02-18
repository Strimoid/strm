import Header from '../../components/header/Header'
import ContentList from '../../components/content/ContentList'
import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <ContentList group={id} />
    </div>
  )
}
