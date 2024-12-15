import "./App.css";
import useFetch from "./hooks/useFetch.ts";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [data] = useFetch<TodoType[]>(url);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p key={item.id}>{item.completed ? "Yes" : "No"}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
