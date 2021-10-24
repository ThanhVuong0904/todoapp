import React, {useState, createContext} from "react";
import { v4 } from 'uuid';
export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
     const [todos, setTodos] = useState(() => {
          const storage = JSON.parse(localStorage.getItem('jobs')) === null
          ? 
               [
                    {id: v4(), title:"HappyCoding", isCompleted: true},
                    {id: v4(), title:"ThanhVuong", isCompleted: false}
               ]
          :
          JSON.parse(localStorage.getItem('jobs'))
          return storage
     })
     const [filterTodos, setFilterTodos] = useState("All")
     const [completedTodo, setCompletedTodo] = useState([])
     const [activeTodo, setActiveTodo] = useState([])

     const addTodo = (todo) => {
          // setTodos([...todos, todo]) Don't use Local Stogare
          //Use Local Storage
          setTodos(prev => {
               const newTodo = [...prev, todo]
               //Save Local Storage
               const jsonTodo = JSON.stringify(newTodo)
               localStorage.setItem("jobs", jsonTodo)
               return newTodo
          })
     }
     const deleteTodo = (id) => {
          // setTodos(() => todos.filter(todo => todo.id !== id))
          setTodos(prev => {
               const newTodo = prev.filter(todo => todo.id !== id)
               const jsonTodo = JSON.stringify(newTodo)
               localStorage.setItem("jobs", jsonTodo)
               return newTodo
          })
     }
     const checkCompleted = (id) => {
          // setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
          setTodos(prev => {
               const newTodo = prev.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
               const jsonTodo = JSON.stringify(newTodo)
               localStorage.setItem("jobs", jsonTodo)
               return newTodo
          })
     }
     const deleteCompleted = () => {
          // setTodos(todos.filter(todo => todo.isCompleted !== true))
          setTodos(prev => {
               const newTodo = prev.filter(todo => todo.isCompleted !== true)
               const jsonTodo = JSON.stringify(newTodo)
               localStorage.setItem("jobs", jsonTodo)
               return newTodo
          })
     }
     
     const completedFilter = () => {
          setFilterTodos("Completed")
          setCompletedTodo(todos.filter(todo => todo.isCompleted === true))
     }

     const activeFilter = () => {
          setFilterTodos("Active")
          setActiveTodo(todos.filter(todo => todo.isCompleted === false))
     }

     const allFilter = () => {
          setFilterTodos("All")
     }
     
     const todoContextData = {
          todos,
          filterTodos,
          completedTodo,
          activeTodo,
          addTodo,
          deleteTodo,
          checkCompleted,
          deleteCompleted,
          completedFilter,
          activeFilter,
          allFilter,
     }
     return (
          <TodoContext.Provider value={todoContextData}>
               {children}
          </TodoContext.Provider>
     )
}
export default TodoContextProvider