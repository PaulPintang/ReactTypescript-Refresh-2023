import { Task } from "../../App";

interface Props {
  list: Task[];
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

const List = ({ list, handleDelete, handleComplete }: Props) => {
  const completed = {
    textDecoration: "line-through",
    color: "gray",
  };
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p style={item.completed ? completed : {}}>{item.todo}</p>
          <button onClick={() => handleComplete(item.id)}>
            mark as {item.completed ? "todo" : "completed"}
          </button>
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
