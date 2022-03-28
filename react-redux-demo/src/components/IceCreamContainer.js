import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
        <button onClick = {props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

//This grabs state from redux
const mapsStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapsStateToProps, mapDispatchToProps) (IceCreamContainer)