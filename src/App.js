import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <header className="bg-primary text-white py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Cocomiel</h1>
            <NavBar />
          </div>        
        </header>
        <main className='py-12'>
          <ItemListContainer greeting={'Bienvenidos a Cocomiel  '}/>
        </main>
      
    </div>
  );
}

export default App;
