import { useState } from 'react'
import { Header } from './components/Header'
import { Tab } from './components/Tab'
import {List} from './components/List'
import tasks from './data/tasks'
import { ITask } from './interfaces/ITask'

function App() {
  const data = tasks;
  const taskList = data.getTasks() as ITask[];
  console.log(taskList);
  
  return (
    <>
      <Header/>
      <Tab/>
       <List lista={taskList}/>
    </>
  )
}

export default App
