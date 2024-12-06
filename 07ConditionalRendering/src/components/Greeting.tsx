interface GreetingProps {
  timeOfDay: string;
}

const Greeting = ({ timeOfDay }: GreetingProps) => {
  return (
    <>
      {timeOfDay === "morning" && <p>Good Morning!</p>}
      {timeOfDay === "afternoon" && <p>Good Afternoon!</p>}
      {timeOfDay === "evening" && <p>Good Evening!</p>}
      {timeOfDay === "night" && <p>Good Night!</p>}
    </>
  );
};

export default Greeting;
