import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Record from "@/components/Records";
import LendRecord from "@/components/Records/LendRecord";
import FoodRecord from "@/components/Records/FoodRecord";
import Modal from "@/components/Modal/blueModal";

const Records = () => {
  const [category, setCategory] = useState([
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ]);
  return (
    <>
      <Navbar />
      <div className="flex px-60 gap-20">
        <div className="flex flex-col rounded-xl bg-white h-screen w-1/4 px-4 gap-6">
          <div className="flex flex-col gap-6 pt-4">
            <p className="text-xl font-semibold">Records</p>
            <button
              className="flex align-center btn btn-sm bg-blue-500 text-white text-sm rounded-3xl w-full"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              +Add
            </button>
            <dialog id="my_modal_3" className="modal">
              <Modal />
            </dialog>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xl font-semibold">Types</div>
            <div className="flex gap-4 px-4">
              <input type="radio" name="radio-1" className="radio" />
              <p>All</p>
            </div>
            <div className="flex gap-4 px-4">
              <input type="radio" name="radio-1" className="radio" />
              <p>Income</p>
            </div>
            <div className="flex gap-4 px-4">
              <input type="radio" name="radio-1" className="radio" />
              <p>Expense</p>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold pb-4">Category</div>
            {category.map((el) => {
              return (
                <div className="flex justify-between align-center px-4 py-2 w-full">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0005 12.5C11.3812 12.5 12.5005 11.3807 12.5005 10C12.5005 8.61929 11.3812 7.5 10.0005 7.5C8.61978 7.5 7.50049 8.61929 7.50049 10C7.50049 11.3807 8.61978 12.5 10.0005 12.5Z"
                        fill="#94A3B8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.664743 10.5904C0.51788 10.2087 0.518007 9.78563 0.665098 9.40408C2.10927 5.65788 5.74378 3 9.99908 3C14.2565 3 17.8925 5.66051 19.3352 9.40962C19.4821 9.79127 19.4819 10.2144 19.3348 10.5959C17.8907 14.3421 14.2562 17 10.0009 17C5.74346 17 2.10746 14.3395 0.664743 10.5904ZM14.0009 10C14.0009 12.2091 12.21 14 10.0009 14C7.79172 14 6.00086 12.2091 6.00086 10C6.00086 7.79086 7.79172 6 10.0009 6C12.21 6 14.0009 7.79086 14.0009 10Z"
                        fill="#94A3B8"
                      />
                    </svg>
                    <p>{el}</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M11.9163 10.5833L9.74967 12.7499C9.48579 13.0138 9.1837 13.0729 8.84342 12.927C8.50315 12.7812 8.33301 12.5208 8.33301 12.1458V7.85411C8.33301 7.47911 8.50315 7.21869 8.84342 7.07286C9.1837 6.92702 9.48579 6.98605 9.74967 7.24994L11.9163 9.41661C11.9997 9.49994 12.0622 9.59022 12.1038 9.68744C12.1455 9.78466 12.1663 9.88883 12.1663 9.99994C12.1663 10.1111 12.1455 10.2152 12.1038 10.3124C12.0622 10.4097 11.9997 10.4999 11.9163 10.5833Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2 items-center px-5">
              <button className="text-2xl text-center flex gap-2 align-center">
                <span className="text-2xl">+</span>
                <span className="text-lg font-semibold py-1 ">
                  Add Category
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Amount Range</p>
            <div className="flex gap-6 pt-4">
              <input
                type="text"
                placeholder="0"
                className="text-center input input-bordered w-full max-w-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="1000"
                className="text-center input input-bordered w-full max-w-xs placeholder:text-black"
              />
            </div>
            <div className="py-4">
              <input
                type="range"
                min={0}
                max="100"
                className="range range-accent"
              />
              <div className="w-full flex justify-between text-xl px-2">
                <span>0</span>
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-xl h-full w-3/4 pt-6 pb-20 px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 rounded-xl h-full">
              <button className="btn bg-gray-300 border-none rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7906 5.23017C13.0777 5.52875 13.0684 6.00353 12.7698 6.29063L8.83208 10L12.7698 13.7094C13.0684 13.9965 13.0777 14.4713 12.7906 14.7698C12.5035 15.0684 12.0287 15.0777 11.7302 14.7906L7.23017 10.5406C7.08311 10.3992 7 10.204 7 10C7 9.79599 7.08311 9.60078 7.23017 9.45938L11.7302 5.20938C12.0287 4.92228 12.5035 4.93159 12.7906 5.23017Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
              <p>Last 30 Days</p>
              <button className="btn bg-gray-300 border-none rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
            </div>
            <div>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1 flex">
                  <p>Newest first</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3005 14.3L8.70046 11.7C8.3838 11.3833 8.31296 11.0208 8.48796 10.6125C8.66296 10.2042 8.97546 10 9.42546 10H14.5755C15.0255 10 15.338 10.2042 15.513 10.6125C15.688 11.0208 15.6171 11.3833 15.3005 11.7L12.7005 14.3C12.6005 14.4 12.4921 14.475 12.3755 14.525C12.2588 14.575 12.1338 14.6 12.0005 14.6C11.8671 14.6 11.7421 14.575 11.6255 14.525C11.5088 14.475 11.4005 14.4 11.3005 14.3Z"
                      fill="#1F2937"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Oldest First</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex bg-white p-4 rounded-xl justify-between">
              <div className="flex gap-4 text-lg items-center">
                <input type="checkbox" className="checkbox" />
                <p>Select all</p>
              </div>
              <p className="text-gray-400">- 35'500₮</p>
            </div>
            <p className="text-lg font-semibold">Today</p>
            <LendRecord />
            <FoodRecord />
            <FoodRecord />
            <FoodRecord />
            <FoodRecord />
          </div>
          <p className="text-xl font-semibold">Yesterday</p>
          <LendRecord />
          <FoodRecord />
          <FoodRecord />
          <FoodRecord />
          <FoodRecord />
        </div>
      </div>
    </>
  );
};

export default Records;
