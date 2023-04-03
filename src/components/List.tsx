import  {Tasks}  from "../data/tasks"
import { ITask } from "../interfaces/ITask"

let tasks = new Tasks();
export function List(lista: Array<ITask>){

    lista = tasks.getTasks();
    return(
        <div>
            {lista.map(item => {
                return (
                    <p>{item.id}</p>
                )
            })}
        </div>
    )
}
