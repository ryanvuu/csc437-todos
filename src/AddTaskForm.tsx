import { useState } from "react";

interface ITaskFormProps {
  onNewTask: (name: string) => void;
}

function AddTaskForm(props: ITaskFormProps) {

  const [inputText, setInputText] = useState("")

  function handleButtonClicked() {
    props.onNewTask(inputText);
    setInputText("");
  }

  return (
    <div> {/* Unfortunately comments in JSX have to be done like this */}
      <input
        className="border-2 border-solid border-gray-600 rounded p-3 mr-2 mb-4 text-[1rem]"
        placeholder="New task name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white py-2 px-4 rounded"
        onClick={handleButtonClicked}>Add task</button>
    </div>
  )
}

export default AddTaskForm;