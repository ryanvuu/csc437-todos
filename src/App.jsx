import { useState } from 'react'
import { nanoid } from 'nanoid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTaskForm from './AddTaskForm'
import Todo from './Todo'
import './App.css'

const INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

function App() {

  const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTaskList([...taskList, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }

  return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <AddTaskForm onNewTask={addTask} />
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul
                role="list"
                className="flex flex-col gap-[0.75rem]"
                aria-labelledby="list-heading">
                {taskList?.map((task) => (
                  <Todo
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    key={task.id}
                    onTaskToggle={toggleTaskCompleted}
                    deleteTask={deleteTask}
                  />
                ))}
              </ul>
          </section>
      </main>
  );
}

export default App;
