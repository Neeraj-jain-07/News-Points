import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

class Kaju extends React.Component {
  constructor(){
    super();
    this.state={
      api:' ',
      run:false
    }
  }
  
  setapi = () => {
    let apiKey = document.getElementById('apiKey').value;
    apiKey = apiKey.trim();
    this.setState({
      api:apiKey,
      run:true
    })
  }
  render() {
    return (<>
      <Navbar />
      <div className="container my-4">
        <div className="container">
          <h4>Api key - Copy and paste below to get news</h4>
          <p> b9e94d9186c443368b45e6b5d0be4e9f   ,   aad1b842a4194fa28011873a2483c55c  ,   9524ed7330d54261be91cca525908830    ,    84eec0f43184461a912413f992cbd5bb   ,     e00424d1253e49658a6f365eea1ff732   ,  1470705f1cbb4da88a0d6cdb12f83408 ,    3f12ae4bc4584589b8523109091fcba5</p>
        </div>
        <div className="container d-flex justify-content-center my-4">
          <div className="form d-flex">
            <input className='px-2' type="text" name="apiKey" id="apiKey" />
            <button className='btn btn-info ms-1 text-white f-bold' onClick={this.setapi} >Enter apiKey</button>
          </div>
        </div>
      </div>

      {this.state.run && <NewsComponent pageSize={3} country="in" category='sport' api={this.state.api} />}
    </>)
  }
}
export default Kaju;
