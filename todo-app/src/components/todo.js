import React, { useReducer } from 'react'
import '../styles/todo.css'

const initialState = {
	item: {
		text: '',
		id: undefined,
		complete: false
	},
	list: []
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_INPUT':
			return {...state, item: {text: action.payload}}
		case 'ADD_TODO':
			return {...state, list: [...state.list, state.item]}
		case 'SET_DONE':
			console.log('done')
		default:
			break;
	}
} 

const Todo = () => {
	const [todos, dispatch] = useReducer(reducer, initialState)

	const setInput = (e) => {
		dispatch({ type: "SET_INPUT", payload: e.target.value });
	};

	const addTodo = () => {
		dispatch({type: 'ADD_TODO'})
		// console.log(todos.list)
	}

	const setDone = () => {
		dispatch({type: 'SET_DONE'})
	}

	return (
		<div className='parent-container'>
			<div className='child-container'>
				<div className='input-container'>
					<input type='text'onChange={(e) => {setInput(e)}}/>
					<button onClick={() => addTodo()}> + </button>
				</div>

				<div className='todos-container'>
					<ul>
						{todos.list.map((todo) => {
							return (
								<li key={Math.random()} className='todo'>
									{todo.text}
									<div className='todo-btns'>
										<button>Delete</button>
										<button onClick={() => dispatch({type: 'SET_DONE'})}>Done</button>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Todo