import React from "react";
import { Todoitem } from "./Todoitem";

export function Todolist(){
    return (
        <>
            <h1>lista de tareas</h1>
            <ul className='list-group'>
                <Todoitem/>
            </ul>
        </>
    );
}