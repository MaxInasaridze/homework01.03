import './App.css'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <Navbar/>
      <div className='content'>
        <div className="text">
          <h1>Virtual Assistant</h1>
          <h1>at Your Service</h1>
        </div>
        <div className="title">
          <p>I'm a title. Click here to edit me.</p>
          <button className='btn_s_s'>See Service</button>
        </div>
        
      </div>

    </>
  )
}

export default App
