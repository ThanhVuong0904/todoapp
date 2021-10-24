import React, { useContext } from 'react'
import IconCross from '../images/icon-cross.svg'
import { TodoContext } from '../contexts/TodoContext'
import { ThemeContext } from '../contexts/ThemeContext'
export default function TodoItem({data}) {
     const { deleteTodo , checkCompleted } = useContext(TodoContext)
     const { theme } = useContext(ThemeContext)
     const { isDarkTheme ,light, dark } = theme
     const style = isDarkTheme ? dark : light
  return (
     data.map(item => {
         return (
          <div className="todo-item" key={item.id} style={{borderBottom: `1px solid ${style.borderBottomItem}`}}>
               <div className="borderGroup">
                    <input 
                         id={item.id} 
                         type="checkbox" 
                         checked={item.isCompleted}
                         onChange={() => checkCompleted(item.id)}
                    />
                    <label htmlFor={item.id}></label>
               </div>
               {
                    item.isCompleted ?
                    <p className="todo-item-title title-completed" style={{color : style.titleColorCompleted}}>
                         {item.title}
                    </p>
                    :
                    <p className="todo-item-title" style={{color: style.childrenColor}}>
                         {item.title}
                    </p>
               }
               <img src={IconCross} alt="x" onClick={()=>deleteTodo(item.id)} className="icon-cross"/>
          </div>
         )
    })
  )
}
