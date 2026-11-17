import { Component } from 'react';
import { Count } from './Count'

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditChange = this.handleEditChange(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleEdit(index) {
    this.setState({
      editingIndex: index,
      editingText: this.state.todos[index],
    });
  }

  handleEditChange(e) {
    this.setState({
      editingIndex: e.target.value
    })
  }

  handleResubmit(e, index) {
    e.preventDefault();

    this.setState((state) => {
      const updatedTodos = [...state.todos];
      updatedTodos[index] = state.editingText;
      
      return {
        todos: updatedTodos,
        editingIndex: null,
        editingText: ''
      }
    });
  }

  handleDelete(taskToDelete){
    // const updatedTasks = this.state.tasks.filter((task) => taskId.id !== taskId);
    // this.setState({
    //   tasks: updatedTasks
    // });
    this.setState((state) => ({
      todos: state .todos.filter((todo) => todo !== taskToDelete),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <Count todos={this.state.todos}></Count>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
          
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <>
                  <input type="text"  value={this.state.editingText} onChange={this.handleEditChange}/>
                </>
              ) : (
                <>
                <span>
                  {todo}
                </span>
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(todo)}>Delete</button>
                </>    
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
