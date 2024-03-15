import React from "react";
import { TodoRowItem } from "./todoRowitem"

function ToDoTable(props: {todos: TodoModel[], deleteTodo: Function}) {
    const { todos } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Despcription</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (<TodoRowItem
                    key={todo.rowNumber}
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    rowAssigned={todo.rowAssigned}
                    deleteTodo={props.deleteTodo} />))}
            </tbody>
        </table>
    )
}
export default ToDoTable
