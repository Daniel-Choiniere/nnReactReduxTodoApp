import React from 'react'

// grabbing the todos, and deleteTodo off the prop object using destructuring
const Todos = ({todos, deleteTodo}) => {
    
    // tereneary operator. If there are todos than the function to the right of the question mark is fired. if there are no todos than the function to the right of the colon is fired
    const todoList = todos.length ? (
        // The map() method calls the provided function once for each element in an array, in order.
        todos.map(todo => {
            return (
                // React expects unique key for every surrounding element that we return with the map function
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            );
        })
        ) : (
        <p className="center">You have no todos left, yay!</p>
        );
    return(
        <div className="todos collection">
            {todoList}
        </div>
    );
};

export default Todos;