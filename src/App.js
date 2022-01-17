import './App.css';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import List from './components/List/List';
import Matrix from './components/matrix/Matrix';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className='app-container'>
      <div className="App">
        <h2>Taskify</h2>
        <Form />
        <List />
        <Footer />
      </div>
      <div className='matrix-container'>
        <Matrix />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
