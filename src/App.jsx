import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTaskForm from './AddTaskForm'
import Todo from './Todo'
import './App.css'

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <AddTaskForm />
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul
                role="list"
                className="flex flex-col gap-[0.75rem]"
                aria-labelledby="list-heading">
                {taskList}
              </ul>
          </section>
      </main>
  );
}

export default App;
