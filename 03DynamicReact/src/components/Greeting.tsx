const Greeting = () => {
  const message = "Hello I am Naveen";
  const date = new Date();
  return (
    <div>
      <h1>{message}</h1>
      <p>
        Today is {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
      </p>
    </div>
  );
};

export default Greeting;
