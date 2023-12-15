import Layout from "@/components/Layout";
import React, { useContext } from "react";
import Link from "next/link";
import Finish from "@/components/Finish";
import { UserContext } from "@/context/UserProvider";
import { StepContext } from "@/context/StepContext";

const Step3 = () => {
  const { goToDashboard } = useContext(StepContext);
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-16">
      <Layout />
      <div className="flex flex-col justify-center items-center w-96">
        <Finish />
        <button
          className="btn bg-blue-500 text-white mt-6 w-full"
          onClick={goToDashboard}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Step3;
