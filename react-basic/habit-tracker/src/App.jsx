import React, { Component } from 'react';
import Habits from './components/Habits';
import Navbar from './components/Navbar';
import './App.css';
import Input from './components/Input';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({
      habits: habits,
    });
  };
  nextId = 3;
  inputHabit = (habit) => {
    const habits = [
      ...this.state.habits,
      { id: ++this.nextId, name: habit, count: 0 },
    ];
    this.setState({ habits: habits });
  };
  reset = () => {
    const habits = [...this.state.habits];
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        ></Navbar>
        <Input onInput={this.inputHabit}></Input>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.reset}
        ></Habits>
      </>
    );
  }
}

export default App;
