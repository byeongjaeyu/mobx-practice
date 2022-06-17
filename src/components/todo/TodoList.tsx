import { observer } from "mobx-react"
import store from '../../stores/todo'
import { Todo } from "../../stores/todo"

const TodoList = () => {
    return (
        <div>
            {
                store.todos.map((todo:Todo)=>{
                    return (
                    <div key={todo.id} style={{border:"1px solid black", display:"flex", alignItems:"center"}}>
                        <strong>#{todo.id}</strong>
                        <p style={{marginLeft:"10px"}} className={todo.done?"done":""}>{todo.text}</p>
                        {
                        !todo.done ?
                        <button style={{marginLeft:"10px"}} onClick={()=>{todo.done = !todo.done}}>Complete!</button>:
                        <button style={{marginLeft:"10px"}}>Done!</button>
                        }
                        <button onClick={()=>{store.deleteTodo(todo.id)}}>X</button>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default observer(TodoList)