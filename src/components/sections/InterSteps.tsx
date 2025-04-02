import { FC } from "react";

type Block = {
  id: number;
  title: string;
  des: string;
};

const block: Block[] = [
  {
    id: 1,
    title: "Complete the Assessment",
    des: "Fill out our comprehensive form to evaluate your interview readiness.",
  },
  {
    id: 2,
    title: "Get Personalized Feedback",
    des: "Receive detailed feedback on your strengths and areas for improvement.",
  },
  {
    id: 3,
    title: "Ace Your Interviews",
    des: "Prepare with confidence and showcase your skills to potential employers.",
  },
];

const InterSteps: FC = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-col items-center gap-6 lg:w-4/5">
        <div className="lg:w-1/2 text-center">
          <h1 className="text-2xl font-bold mb-3">
            Prepare for Technical Interviews with Confidence
          </h1>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            maxime exercitationem aspernatur doloribus ex quo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 justify-items-center ">
          {block.map((item) => (
            <div
              className="bg-white w-[95%] shadow-2xl flex flex-col items-center justify-center px-5 py-9 gap-2 rounded-xl hover:scale-105 transition-all delay-150 ease-linear cursor-pointer hover:bg-slate-50 "
              key={item.id}
            >
              <span className=" font-bold bg-sky-100 text-blue-700 rounded-full px-[1.1rem] py-2 text-lg">
                {item.id}
              </span>
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-center text-sm text-gray-400">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterSteps;
