import React,{Component} from 'react'

export default class Counter extends Component{
  render(){
    
    const { value, onIncrement,onDecrement } = this.props

    return(
      <div>
        Clicked:{value} times {' '} <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}