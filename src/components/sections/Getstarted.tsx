import { Button } from "@mui/material";
import { MoveDown } from "lucide-react";
import { FC } from "react";

const Getstarted: FC = () => {
  return (
    <div className="bg-sky-100 flex justify-center  py-14 rounded-2xl mt-4">
      <div className="lg:w-1/2 md:w-3/4 flex flex-justify-center flex-col items-center gap-7">
        <h1 className="lg:text-4xl text-xl text-center text-blue-900 font-extrabold">
          Are You Ready For Interview
        </h1>
        <p className="text-blue-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum
          delectus adipisci aliquam laborum vitae? Dolor minima iure ratione
          nesciunt!
        </p>
        <section className="flex flex-col gap-2">
          <Button variant="contained">
            Get Started <MoveDown size={15} />{" "}
          </Button>
          <small className="text-blue-700">
            Take less than 5 minutes to complete
          </small>
        </section>
      </div>
    </div>
  );
};

export default Getstarted;
