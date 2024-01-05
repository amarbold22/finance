import BarChart from "@/components/BarChart";
import Navbar from "@/components/Navbar";
import React, { useContext, useEffect } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Record from "@/components/Records";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import { TransactionContext } from "@/context/TransactionContext";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { transactions } = useContext(TransactionContext);

  if (!user) return null;

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-6 gap-10 mx-96">
        <div className="grid col-span-2 bg-white h-60 rounded-3xl pl-10 pt-10">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z"
                fill="#0166FF"
              />
            </svg>
            <p className="pt-2 pl-2 font-bold text-xl">Geld</p>
          </div>
          <div>
            <p className="text-white font-bold text-xl">Cash</p>
            <p className="text-white text-xl">10,000,00</p>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-3xl">
          <div className="flex flex-col">
            <div className="flex items-center px-10 py-4 w-full gap-2  border-b-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#84CC16" />
              </svg>
              <p className="text-lg font-lightbold">Your Income</p>
            </div>
            <div className="flex flex-col px-8 py-8 gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold">1,200,000₮</p>
                <p className="text-gray-400 font-semibold">
                  Your Income Amount
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                    fill="#84CC16"
                  />
                </svg>
                <p className="text-lg">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-3xl">
          <div className="flex flex-col">
            <div className="flex items-center px-10 py-4 w-full gap-2  border-b-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#0166FF" />
              </svg>
              <p className="text-lg font-lightbold">Total Expenses</p>
            </div>
            <div className="flex flex-col px-8 py-8 gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold">-1,200,000₮</p>
                <p className="text-gray-400 font-semibold">
                  Your Income Amount
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97982 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43735 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46928 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6218 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19903 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32865 12.3601 8.24959 12.551 8.24959 12.75C8.24959 12.949 8.32865 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6218 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
                    fill="#84CC16"
                  />
                </svg>
                <p className="text-lg">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white h-[420px] rounded-3xl overflow-hidden">
          <div className="flex flex-col">
            <div className="flex items-center px-10 py-4 w-full gap-2 border-b-2">
              <p className="text-lg font-bold">Income - Expenses</p>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="col-span-3 bg-white h-[420px] rounded-3xl overflow-hidden">
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-10 py-4 w-full gap-2">
              <p className="text-lg font-bold">Income - Expenses</p>
              <p className="text-gray-400">Jun 1 - Dec 31</p>
            </div>
            <div className="px-12 py-8">
              <DoughnutChart />
            </div>
          </div>
        </div>
        <div className="col-span-6 rounded-3xl h-96">
          <div className="bg-white px-6 py-4 rounded-lg text-lg font-bold border-b-2">
            Last Records
          </div>
          <div className="border-gray-900">
            {transactions.map((el) => (
              <Record transaction={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
