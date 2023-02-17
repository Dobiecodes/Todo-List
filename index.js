function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Go to the gym',
      isCompleted: false,
    },
    {
      text: 'Work',
      isCompleted: false,
    },
    {
      text: 'Make dinner',
      isCompleted: false,
    },        
    {
      text: 'Work on module',
      isCompleted: false,
    },
    {
      text: 'Drink some wine and relax',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
