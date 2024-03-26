import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Main from './Main'

function App() {
  return (
    <div>
      <div className='px-[15%] align-items-center hidden'>
        <Header/>
      </div>
      <Main />
      {/* <Popular />
      <Connection />
      <About />
      <Reviews />
      <Footer /> */}
    </div>
  );
}

export default App;