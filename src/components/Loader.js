import React from 'react'
import loader from '../assets/loading.gif'

const Loader=() => {
    const styleOfdiv = {
        height: "42vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
      <div className='text-center mb-5' style={styleOfdiv}>
        <img style={{width:"7%"}}   src={`${loader}`} alt={`${loader}`} />
      </div>
    )
}

export default Loader;
