import React, { useContext, useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import FilterTodo from './FilterTodo';
import Footer from './Footer';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext'

export default function TodoApp() {
     const { theme } = useContext(ThemeContext)
     const { toggleTheme } = useContext(ThemeContext)
     const { isDarkTheme ,light, dark } = theme
     const style = isDarkTheme ? dark : light
    
     const { todos, filterTodos, completedTodo, activeTodo } = useContext(TodoContext)
     const [data, setData] = useState(todos)
     useEffect(() => {
          if(filterTodos === "All") {
               setData(todos)
          }
          if(filterTodos === "Completed") {
               setData(completedTodo)
          }
          if(filterTodos === "Active") {
               setData(activeTodo)
          }
     }, [todos, filterTodos, completedTodo, activeTodo])
  return (
    <div className="todo-app">
          <div className="todo-top">
               <h1 className="todo-heading">TODO</h1>
               <img src={style.iconToggle} alt="icon" onClick={toggleTheme} className="todo-toggle"/>
          </div>
          <TodoForm />
          <div className="todo-list" style={{ backgroundColor: style.backgroundChildren }}>
               <TodoItem data = { data } />
               <FilterTodo />
          </div>
          <Footer></Footer>
    </div>
  )
}