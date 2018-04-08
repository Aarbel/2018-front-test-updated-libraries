import React, { Component } from 'react';

/** From the article of Dan : 
 * https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367 */

const counter = (state, action) => {

  console.log('state to change :', state);

  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }

}

export class ReactLikeRedux extends Component {

  //initialize state with counter undefined
  state = {
      value: 0,
      variable: 1,
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
      console.log('next state :', nextState);
  }
  
  dispatch(action) {
    //setState replaces the state with new state objects.
    // counter(prevState, action) returns for example { value: 1 }
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };
  
  render() {
    return (
      <div className="react-counter">

        {this.state.value}

        <button onClick={this.increment}>+</button>

        <button onClick={this.decrement}>-</button>

      </div>
    )
  }

}
