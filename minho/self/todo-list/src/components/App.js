import React , { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

class App extends Component {
     render(){
         return(
             <PageTemplate>
                 <TodoInputContainer/>
                 <TodoListContainer/>
             </PageTemplate>
         )
     }
}

export default App;
// import React, { Component } from 'react';
// import PageTemplate from './PageTemplate';
// import TodoInput from './Todoinput';
// import TodoList from './TodoList';

// const initialTodos = new Array(500).fill(0).map(
//     (foo,index) => ({id : index, text :`일정 ${index}`, done:false})
// )

// class App extends Component {
//     state = {
//         input : '',
//         todos : initialTodos,
//     }

//     // 일정 데이터 안에 들어가는 id 값
//     id = 1
//     getId = () => {
//         return ++this.id;
//     }

//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({
//             input : value
//         });
//     }

//     handleInsert = () => {
//         const { todos, input }= this.state;

//         const newTodo = {
//             text : input,
//             done : false,
//             id : this.getId()
//         };

//         this.setState({
//             todos : [...todos,newTodo],
//             input : ''
//         });
//     }

//     handleToggle = (id) => {
//         const { todos } = this.state;
//         const index = todos.findIndex(todo => todo.id === id);

//         const toggled = {
//             ...todos[index],
//             done : !todos[index].done
//         };

//         this.setState({
//             todos:[
//                 ...todos.slice(0,index),
//                 toggled,
//                 ...todos.slice(index +1,todos.length)
//             ]
//         });
//     }

//     handleRemove = (id) => {
//         const { todos } = this.state;
//         const index = todos.findIndex(todo => todo.id === id);
//         this.setState({
//             todos:[
//                 ...todos.slice(0,index),
//                 ...todos.slice(index + 1,todos.length),
//             ]
//         })
//     }

//     render () {
//         const { input ,todos } = this.state;
//         const {
//             handleChange,
//             handleInsert,
//             handleToggle,
//             handleRemove
//         }= this;

//         return (
//             <>
//             <PageTemplate>
//             <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}></TodoInput>
//             <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
//             </PageTemplate>
//             </>
//         );
//     }
// }

// export default App;