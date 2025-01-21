import { FaCheckCircle } from "react-icons/fa";
import { useQuizStore } from "../store/useQuizStore.ts";

const SideBar = () => {
  const { questions, currentQuestion } = useQuizStore();

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="mb-4 text-xl font-bold">Quiz Progress</h2>

      <ul>
        {questions.map((_, index) => (
          <li key={index} className="flex items-center mb-2">
            <FaCheckCircle
              className={`mr-2 ${
                index <= currentQuestion ? "text-green-500" : "text-gray-400"
              }`}
            />

            <span>Question {index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
