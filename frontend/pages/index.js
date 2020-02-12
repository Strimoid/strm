import EntryForm from '../components/entry/EntryForm';
import EntryList from '../components/entry/EntryList';

export default function Index() {
  return (
    <div className="container mx-auto">
      <EntryForm />
      <EntryList />
    </div>
  );
}
