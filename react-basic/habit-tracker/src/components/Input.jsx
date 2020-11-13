import React, { Component } from 'react';

class Input extends Component {
  state = {
    value: '',
  };
  changeHabit = (event) => {
    const value = event.target.value;
    this.setState({ value: value });
  };
  inputHabit = () => {
    this.props.onInput(this.state.value);
    const value = '';
    this.setState({ value: value });
  };
  inputHabitKeyDown = (event) => {
    if (event.key === 'Enter') this.inputHabit();
  };
  render() {
    return (
      <div className="input">
        <input
          type="text"
          value={this.state.value}
          placeholder="Habit"
          onChange={this.changeHabit}
          onKeyDown={this.inputHabitKeyDown}
        />
        <button className="input-button" onClick={this.inputHabit}>
          Add
        </button>
      </div>
    );
  }
}

export default Input;
