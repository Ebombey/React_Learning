import { useEffect, useState } from "react";

interface TodoType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchDataEffect = () => {
  const [data, setData] = useState<TodoType[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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
      <div>First Todo: {data[0]?.title}</div>
    </>
  );
};

export default FetchDataEffect;
