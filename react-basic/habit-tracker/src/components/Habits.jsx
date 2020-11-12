import React, { Component } from 'react';
import Habit from './Habit';
class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // const index = this.state.habits.indexOf(habit);
    // this.state.habits[index].count++; // state를 직접적으로 변경하면 좋지가않다.
    const habits = [...this.state.habits]; //이런식으로 spread연산자로
    //새로운 ref의 배열을 할당해서 state에 직접적으로 수정안되도록하자
    //this.state에 직접적으로 수정하는건 리액에서 지양하는방법이므로 이렇게 spread연산자로 새로운 배열자체를 할당한뒤 이걸수정하고
    //이 배열을 setState에 새로운 객체의 프로퍼티로 넣어서 state업데이트함.
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits }); // this.setState({habits});로 줄이기가능
  };
  handleDelete = (habit) => {
    this.setState({
      habits: this.state.habits.filter((item) => item.id !== habit.id),
    });
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
