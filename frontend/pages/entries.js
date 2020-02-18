import Header from '../components/header/Header'
import EntryForm from '../components/entry/EntryForm';
import EntryList from '../components/entry/EntryList';

export default function Entries() {
  return <>
    <div className="container bg-white mx-auto">
      <Header />
      <div className="px-4">
        <EntryForm />
        <EntryList group="all" />
      </div>
    </div>
        
        
    </>;
}
