import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
        <button onClick = {() =>props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  )
}

//This grabs state from redux
const mapsStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(mapsStateToProps, mapDispatchToProps) (NewCakeContainer)