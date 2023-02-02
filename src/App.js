import React ,{useState}from 'react'
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const Kaju =()=> {
   const [api, setapi] = useState('')
   const [run, setrun] = useState(false)
   const [Bar, setBar] = useState(0)
 

 const  menager = () => {
    setapi(' ')
    setrun(false)
    setApiExlpicit();
  }

  const setApiExlpicit = () => {
    // console.log('clicked')
    
    // console.log(run)
    let apiKey = document.getElementById('apiKey').value;
    apiKey = apiKey.trim();
    setapi(apiKey)
    setrun(true)
  }
  const pageSize = 3
    
    return (<>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={Bar}
      />
        <Navbar />
        <div className="container my-5">
          <div className="container">
            <h4>Api key - Copy and paste below to get news</h4>
            <p> b9e94d9186c443368b45e6b5d0be4e9f   ,   aad1b842a4194fa28011873a2483c55c  ,   9524ed7330d54261be91cca525908830    ,    84eec0f43184461a912413f992cbd5bb   ,     e00424d1253e49658a6f365eea1ff732   ,  1470705f1cbb4da88a0d6cdb12f83408 ,    3f12ae4bc4584589b8523109091fcba5</p>
          </div>
          <div className="container d-flex justify-content-center my-4">
            <div className="form d-flex">
              <input className='px-2' type="text" name="apiKey" id="apiKey" />
              <button className='btn btn-sm btn-info ms-1 text-white f-bold' onClick={menager} >Enter apiKey</button>
            </div>
         </div>
        </div>
        

        {run &&
          <Routes>
            <Route path="/" element={<NewsComponent setBar={setBar} key="general" pageSize={pageSize} country="in" category='general' api={api} />} />
            <Route path="/business" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="business" country="in" category='business' api={api} />} />
            <Route path="/entertainment" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="entertainment" country="in" category='entertainment' api={api} />} />
            
            <Route path="/health" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="health" country="in" category='health' api={api} />} />
            <Route path="/science" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="science" country="in" category='science' api={api} />} />
            <Route path="/sports" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="sports" country="in" category='sports' api={api} />} />
            <Route path="/technology" element={<NewsComponent setBar={setBar} pageSize={pageSize} key="technology" country="in" category='technology' api={api} />} />
          </Routes> }
          
      </BrowserRouter>
    </>)
}
export default Kaju;
