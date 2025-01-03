import { TodoTableProps } from "./types"

export default function TodoTable(props: TodoTableProps) {
  return (
    <div>
      <table id="todotable">
        <thead>
          <tr>
            <th>Description</th>
            <th>Duedate</th>
          </tr>
        </thead>
        <tbody>
        {
        props.todos.map((todo: Todo, index: number) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.description}</td>
          </tr>)
        }
        </tbody>
      </table>    
    </div>
  )
}
