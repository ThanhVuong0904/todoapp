import React, {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'
import { v4 } from 'uuid';
export default function TodoForm() {
     const {theme} = useContext(ThemeContext)
     const {isDarkTheme ,light, dark} = theme
     const style = isDarkTheme ? dark : light

     const [title, setTitle] = useState('')
     const {addTodo} = useContext(TodoContext)
     const handleAdd = (e) => {
          if(e.key === "Enter") {
               if(title) {
                    addTodo({id: v4(), title: title, isCompleted: false})
                    setTitle('')
               }
               else {
                    alert("Opps")
               }
          }
     }
  return (
     <div className="todo-form" style={{backgroundColor: style.backgroundChildren}}>
          <span className="border">
          </span>
          <input 
               type="text" 
               id="todo-input" 
               placeholder="Create a new todo..."
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
               onKeyDown={(e) => handleAdd(e)}
               style={{color: style.childrenColor}}
          />
     </div>
  )
}
