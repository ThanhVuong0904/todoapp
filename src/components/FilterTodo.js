import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { ThemeContext } from '../contexts/ThemeContext'
export default function FilterTodo() {
	//Context
	const { todos, deleteCompleted, completedFilter, activeFilter, allFilter } = useContext(TodoContext)
	const { theme } = useContext(ThemeContext)
	const { isDarkTheme ,light, dark } = theme
	const style = isDarkTheme ? dark : light
	
	//Button
	const [buttonState, setButtonState] = useState({
		isActive: "All",
		buttonArray: [
			{title : "All"},
			{title : "Active"},
			{title : "Completed"}
		]
	})
	//Item Left
	const [itemLeft, setItemLeft] = useState(0)
	useEffect(() => {
		setItemLeft(todos.length)
	}, [todos])
	//Filter
	const handleFilter = (title) => {
		if(title === "All") {
			allFilter()
		}
		if(title === "Active") {
			activeFilter()
		}
		if(title === "Completed") {
			completedFilter()
		}
		setButtonState({...buttonState, isActive: title})
	}
	//Add class active and hover
	const toggleActiveStyle = (title) => {
		let className=""
		if(isDarkTheme === true) {
			className= "dark"
			if(buttonState.isActive === title) {
				className = "active"
			}
		}
		if(isDarkTheme === false) {
			className= "light"
			if(buttonState.isActive === title) {
				className = "active"
			}
		}
		return className
	}
	//Hover style Clear Completed Button
	const clearCompletedStyle = () => {
		let className=""
		if(isDarkTheme === true) {
			className= "dark"
		}
		if(isDarkTheme === false) {
			className= "light"
		}
		return className
	}
	return (
		<div className="filter" >
			<p style={{color: style.filterColor}}>{ itemLeft } item left</p>
			<div className="status" style={{backgroundColor: style.backgroundChildren}}>
				{
					buttonState.buttonArray.map((button, index) => {
						return (
							<button 
								key={index} 
								style={{color: style.filterColor}}
								className={ toggleActiveStyle(button.title) }
								onClick={ () => handleFilter(button.title) }
							>
									{button.title}
							</button>
						)
					})
				}
			</div>
			<button 
				style={{color: style.filterColor}} 
				onClick={ () => deleteCompleted() }
				className={ clearCompletedStyle() }
			>
					Clear Completed
			</button>
		</div>
	)
}
