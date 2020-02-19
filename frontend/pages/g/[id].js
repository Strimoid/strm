import Header from '../../components/header/Header'
import ContentList from '../../components/content/ContentList'
import WithSidebar from '../../components/sidebar/with-sidebar'
import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <WithSidebar>
        <ContentList group={id} />
      </WithSidebar>
    </div>
  )
}
