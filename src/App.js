import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';

function App() {
  return (
    <div className='backGr'>
      <div className='myOpacity backdrop-opacity-1 border-solid border-2 border-indigo-600 h-12 fixed w-full'>
        <Header />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;