import { useEffect, useState } from "react";

const useFetch = <TodoType>(url: string): [TodoType | null] => {
  const [data, setData] = useState<TodoType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return [data];
};

export default useFetch;
