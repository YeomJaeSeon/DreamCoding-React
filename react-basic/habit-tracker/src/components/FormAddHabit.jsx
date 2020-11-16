import React, { memo } from 'react';

const FormAddHabit = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    value && props.onAdd(value);
    formRef.current.reset();
  };
  console.log('FormAddHabit');
  return (
    <form ref={formRef} className="input" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Habit" />
      <button className="input-button">Add</button>
    </form>
  );
});

export default FormAddHabit;
