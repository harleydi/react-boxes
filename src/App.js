import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className='main'>
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
