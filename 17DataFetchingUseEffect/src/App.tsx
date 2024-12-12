import { useEffect, useState } from "react";
import "./App.css";

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [data, setData] = useState<TodoType[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }

    getData();
  });
  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
