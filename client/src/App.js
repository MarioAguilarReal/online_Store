import './App.css';
import Catalog from './components/catalog';
import Footer from './components/footer';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Catalog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
