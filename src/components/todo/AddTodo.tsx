import { observer } from "mobx-react"
import store from '../../stores/todo'
import { Todo } from "../../stores/todo"

const AddTodo = () => {
    return (
        <div>
            <input 
            placeholder="New Todo" 
            onChange={(e)=>(store.newTodo = e.target.value)}
            value={store.newTodo}
            />
            <button onClick={()=>{
            store.addTodo();
            }}>
            Add Todo
            </button>
      </div>
    )
}

export default observer(AddTodo)