import { useState } from "react";
import { useForm } from "react-hook-form";


function Calculator() {

    const { register, handleSubmit, watch } = useForm();
    const [ compoundInterest, setCompoundInterest] = useState(null);

    const onSubmit = (data) => {
        const { principal, timeInYears, timeInDays, rate } = data;

        const P = parseFloat(principal);
        const R = parseFloat(rate)/100 ;
        let T;

        if (timeInDays) {
          T = parseFloat(timeInDays) / 365;
        } else {
          T = parseFloat(timeInYears);
        }


        const A = P * Math.pow((1 + R), T);
        const CI = A - P;

        setCompoundInterest(CI.toFixed(2));
    }

    const timeInDays = watch('timeInDays');

  return (
    <div className="max-w-screen-sm mx-auto flex flex-col gap-5 ">
      <h1 className="text-2xl font-bold text-center mt-3">
        Compound Interest Calculator
      </h1>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-0"
          action=""
        >
          <label className="text-xl mb-2">Principal (P)</label>
          <input
            {...register("principal")}
            className="w-full h-10 text-xl font-semibold mb-4 rounded"
            type="number"
            required
          />

          <div className="w-full flex flex-col">
            <div className="w-full flex ">
              <label className="w-1/2 text-xl mb-2">
                Time (In Years)
              </label>
              <label className="w-1/2 text-xl mb-2">
                Time (In Days)
              </label>
            </div>
            <div className="flex gap-2">
              <input
                {...register("timeInYears")}
                className="w-1/2 h-10 text-xl font-semibold mb-4 rounded"
                type="number" disabled={!!timeInDays}
              />
              <input
                {...register("timeInDays")}
                className="w-1/2 h-10 text-xl font-semibold mb-4 rounded"
                type="number" disabled={watch('timeInYears')}
              />
            </div>
          </div>

          <label className="text-xl mb-2">
            Rate of Interest (%)
          </label>
          <input
            {...register("rate")}
            className="w-full h-10 text-xl font-semibold mb-4 rounded"
            type="number"
            required
          />
          <button
            className="w-28 h-10 items-center rounded text-white text-normal font-semibold bg-blue-500"
            type="submit"
          >
            Calculate
          </button>
        </form>
      </div>
      {compoundInterest !== null && (
        <div className="p-5 bg-green-400 rounded border border-slate-900">
          <h3 className="text-xl font-semibold">Result:</h3>
          <p className="">
            Compound Interest:{" "}
            <span className="font-semibold"> Rs.{compoundInterest}</span>{" "}
          </p>
        </div>
      )}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>
          Enjoying this project? Show your support by giving a ⭐ on my
          <a
            href="https://github.com/abhimanyu-chaudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            {" "}
            GitHub repository
          </a>
          !
        </p>
      </footer>
    </div>
  );
}

export default Calculator;
