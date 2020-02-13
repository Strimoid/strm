import Header from '../components/header/Header'
import EntryForm from '../components/entry/EntryForm';
import EntryList from '../components/entry/EntryList';

export default function Entries() {
  return (
    <div className="container mx-auto">
        <Header />
        <EntryForm />
        <EntryList />
    </div>
  );
}
