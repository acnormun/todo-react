import { ITask } from "../interfaces/ITask"

class Tasks{

    private taskList: Array<ITask> = [
        {
            id: 1,
            title: 'Teste',
            description: 'descrição do teste',
            time: "01:00:00"
        },
        {
            id: 2,
            title: 'Teste 2',
            description: 'descrição do teste 2',
            time: "02:00:00"
        },
    ]

    public getTasks(){
        return this.taskList
    }

    public setTasks(item: ITask){
        this.taskList.push(item)
    }
}

export default new Tasks();