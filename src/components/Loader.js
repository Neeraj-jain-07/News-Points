import React, { Component } from 'react'
import loader from '../assets/loading.gif'

export default class Loader extends Component {
    styleOfdiv = {
        height: "42vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  render() {
    return (
      <div className='text-center mb-5' style={this.styleOfdiv}>
        <img style={{width:"7%"}}   src={`${loader}`} alt={`${loader}`} />
      </div>
    )
  }
}
