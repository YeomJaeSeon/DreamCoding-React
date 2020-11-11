import React, { Component } from 'react';

export default class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    //state 오브젝트안의 count 증가한뒤 state업데이트한다.
    //++this.state.count;  : react는 state업데이트된지 몰라.
    this.setState({ count: this.state.count + 1 });
    //react Component에서 제공하는 setState함수를 사용해서 state를 업데이트가능
  };
  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
