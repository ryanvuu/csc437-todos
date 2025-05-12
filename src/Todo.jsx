import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {

  function handleCheckboxClicked() {
    props.onTaskToggle(props.id);
  }

  function handleTaskDelete() {
    props.deleteTask(props.id);
  }

  return (
    <li className="flex gap-[1.5rem]">
      <label htmlFor={props.id}>
          <input
            type="checkbox"
            defaultChecked={props.completed}
            onChange={handleCheckboxClicked} /> {props.name}
      </label>
      <button onClick={handleTaskDelete}>
        <FontAwesomeIcon className="text-gray-500" icon={faTrash} title="Delete item"/>
      </button>
    </li>
  );
}

export default Todo;