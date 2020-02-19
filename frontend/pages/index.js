import Header from '../components/header/Header'
import ContentList from '../components/content/ContentList'
import WithSidebar from '../components/sidebar/with-sidebar'

export default function Index () {
  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <WithSidebar>
        <ContentList group='all' />
      </WithSidebar>
    </div>
  )
}
