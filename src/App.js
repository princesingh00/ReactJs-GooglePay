import './App.css';
import GooglePay from './Sample';
import logoGpay from './logo513.png';
import logoReact from './logo512.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <text>React and Google pay Integration</text>
        <div className='App-header-img'>
          <img src={logoGpay} width={100} alt='googlepay'/>
          <img src={logoReact} width={50} alt='react'/>
        </div>
      </div>
      <GooglePay />
    </div>
  );
}

export default App;