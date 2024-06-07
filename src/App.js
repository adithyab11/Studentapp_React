import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewallStudent from './ViewallStudent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <AddStudent/>
      <SearchStudent/>
      <DeleteStudent/>
      <ViewallStudent/>
      <Navbar/>
    </div>
  );
}

export default App;
