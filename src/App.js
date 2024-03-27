// import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import About from './About';
import Main from './Main'

function App() {
  return (
    <div>
      <div className=" h-[90px] " />
      <Header className='px-[15%]  top-0 z-20 '/>

      <Main />
      <div className=" h-[900px] " />
      {/* <Popular />
      <Connection />
      <About />
      <Reviews />
      <Footer /> */}
    </div>
  );
}

export default App;