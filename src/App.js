import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

class Kaju extends React.Component {
  constructor() {
    super();
    this.state = {
      api: ' ',
      run: false,
      setBar :0
    }
  }
   
  setTopScrollBar = (progress) => {
     this.setState({setBar:progress})
  }

  menager = () => {
    this.setState({api:' ',run:false})
    this.setapi()
  }
  setapi = () => {
    console.log('clicked')
    
    console.log(this.state.run)
    let apiKey = document.getElementById('apiKey').value;
    apiKey = apiKey.trim();
    this.setState({
      api: apiKey,
      run: true
    })
  }
   pageSize = 3
  render() {
    
    return (<>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.setBar}
      />
        <Navbar />
        <div className="container my-4">
          <div className="container">
            <h4>Api key - Copy and paste below to get news</h4>
            <p> b9e94d9186c443368b45e6b5d0be4e9f   ,   aad1b842a4194fa28011873a2483c55c  ,   9524ed7330d54261be91cca525908830    ,    84eec0f43184461a912413f992cbd5bb   ,     e00424d1253e49658a6f365eea1ff732   ,  1470705f1cbb4da88a0d6cdb12f83408 ,    3f12ae4bc4584589b8523109091fcba5</p>
          </div>
          <div className="container d-flex justify-content-center my-4">
            <div className="form d-flex">
              <input className='px-2' type="text" name="apiKey" id="apiKey" />
              <button className='btn btn-sm btn-info ms-1 text-white f-bold' onClick={this.menager} >Enter apiKey</button>
            </div>
          </div>
        </div>
        

        {this.state.run &&
          <Routes>
            <Route path="/" element={<NewsComponent setBar={this.setTopScrollBar} key="general" pageSize={this.pageSize} country="in" category='general' api={this.state.api} />} />
            <Route path="/business" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="business" country="in" category='business' api={this.state.api} />} />
            <Route path="/entertainment" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="entertainment" country="in" category='entertainment' api={this.state.api} />} />
            
            <Route path="/health" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="health" country="in" category='health' api={this.state.api} />} />
            <Route path="/science" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="science" country="in" category='science' api={this.state.api} />} />
            <Route path="/sports" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="sports" country="in" category='sports' api={this.state.api} />} />
            <Route path="/technology" element={<NewsComponent setBar={this.setTopScrollBar} pageSize={this.pageSize} key="technology" country="in" category='technology' api={this.state.api} />} />
          </Routes> }
          
      </BrowserRouter>
    </>)
  }
}
export default Kaju;
