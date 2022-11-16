import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
	todoList: PropTypes.array,
	onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
	todoList: [],
	onTodoClick: null,
};
function TodoList({ todoList, onTodoClick }) {
	const handleTodoClick = (todo, idx) => {
		if (!onTodoClick) return;

		onTodoClick(todo, idx);
	}
	console.log("LISRT", todoList)
	todoList.map((todo, idx) => {
		console.log(`todo ${idx}`, todo)
	})

	return (
		<ul className="todo-list">
			{todoList.map((todo, idx) => (
				<li
					key={todo.id}
					className={classnames({
						'todo-iteam': true,
						completed: todo.status === 'completed'
					})}
					onClick={() => handleTodoClick(todo, idx)}
				>
					{todo.title}
				</li>
			))}
			<li>
				sfsdfsdf
			</li>
		</ul>
	);
}

export default TodoList;