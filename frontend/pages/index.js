import Header from '../components/header/Header'
import ContentList from '../components/content/ContentList'

export default function Index () {
  return (
    <div className='container bg-white mx-auto'>
      <Header />
      <ContentList group='all' />
    </div>
  )
}
