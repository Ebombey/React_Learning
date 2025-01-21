import Question from "./Question.tsx";
import SideBar from "./SideBar.tsx";

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-col items-center justify-center flex-1">
        <Question />
      </div>
    </div>
  );
};

export default QuizLayout;
