import { useQuizStore } from "../store/useQuizStore.ts";

const Question = () => {
  const {
    questions,
    currentQuestion,
    selectAnswer,
    answers,
    nextQuestion,
    previousQuestion,
    showScore,
    score,
    resetQuiz,
  } = useQuizStore();

  if (showScore) {
    return (
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-semibold">Your Score</h2>
        <p className="mt-4 text-lg">
          You scored {score} out of {questions.length}
        </p>

        <button
          className="px-4 py-2 mr-6 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={resetQuiz}
        >
          Restart
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const answer = answers[currentQuestion];
  console.log(answer);

  const handleSelect = (optionIndex: number) => {
    selectAnswer(optionIndex);
  };

  const handleSubmit = () => nextQuestion();
  return (
    <div className="w-3/4 p-6 ">
      <h3 className="text-2xl font-semibold">{question.question}</h3>

      <div className="mt-4">
        {question.options.map((option, index) => (
          <div key={index} className="my-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={answer === index}
                onChange={() => handleSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-2">
        {currentQuestion < questions.length - 1 ? (
          <button
            className="px-4 py-2 mt-6 text-white bg-blue-500 rounded w-[6rem] hover:bg-blue-6 00"
            onClick={nextQuestion}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 mt-6 w-[6rem] text-white bg-green-500 rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}

        {currentQuestion > 0 && (
          <button
            className="px-4 py-2 ml-4 w-[6rem] text-white bg-gray-500 rounded hover:bg-gray-600"
            onClick={previousQuestion}
          >
            Previous
          </button>
        )}
      </div>

      {/* <div className="mt-2">
        <button
          className={`px-4 py-2 mr-4 text-white bg-gray-500 rounded hover:bg-gray-600 transition-opacity duration-500 ${
            currentQuestion === 0 ? "invisible opacity-0" : "opacity-100"
          }`}
          onClick={previousQuestion}
        >
          Previous
        </button>
      </div> */}
    </div>
  );
};

export default Question;
