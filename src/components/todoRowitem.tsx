import React from "react";

export const TodoRowItem: React.FC<{
    rowNumber: number,
    rowDescription: string,
    rowAssigned: string,
    deleteTodo: Function
}> = (props) => {
    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)} >
            <td scope="row">{props.rowNumber}</td>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    );
}