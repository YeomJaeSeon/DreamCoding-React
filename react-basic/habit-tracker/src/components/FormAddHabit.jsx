import React, { PureComponent } from 'react';

class FormAddHabit extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const value = this.inputRef.current.value;
    this.props.onAdd(value);
    this.formRef.current.reset();
  };
  render() {
    console.log('FormAddHabit');
    return (
      <form ref={this.formRef} className="input" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Habit" />
        <button className="input-button">Add</button>
      </form>
    );
  }
}

export default FormAddHabit;
