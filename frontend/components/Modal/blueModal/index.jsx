import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="modal-box flex flex-col gap-6 max-w-[1000px]">
      <div className="flex justify-between items-center pb-2 border-b-2">
        <p className="text-xl font-semibold">Add record</p>
        <form method="dialog">
          <button className="btn btn-sm">✕</button>
        </form>
      </div>
      <div className="flex h-96">
        <div className="w-1/2 flex flex-col gap-4 pr-6">
          <div className="flex w-full rounded-full bg-gray-300">
            <button
              className="btn bg-blue-500 border-none w-1/2 rounded-full text-white"
              onClick={() => {
                setModal(true);
              }}
            >
              Expense
            </button>
            <button
              className="btn bg-gray-300 border-none w-1/2 rounded-full text-black"
              onClick={() => {
                setModal(false);
              }}
            >
              Income
            </button>
          </div>
          <input
            type="text"
            placeholder="Amount"
            className="input w-full placeholder:text-black bg-gray-300 py-4"
          />
          <p className="px-3 text-lg">Category</p>
          <div className="dropdown dropdown-end w-full">
            <label
              tabIndex={0}
              className="flex justify-between btn w-full border-1 border-gray-200"
            >
              <p>Choose</p>
              <p>↓</p>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-blue-100 rounded-box w-full"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col">
              <p className="text-lg pl-4">Date</p>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 flex justify-between"
                >
                  <p>Oct 23, 2023</p>
                  <p>↓</p>
                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                  <li>
                    <a>Date</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 flex flex-col">
              <p className="text-lg pl-4">Date</p>
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 flex justify-between"
                >
                  <p>4:15PM</p>
                  <p>↓</p>
                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                  <li>
                    <a>Date</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="btn bg-blue-500 rounded-full text-white">
            Add Record
          </button>
        </div>
        <div className="w-1/2 flex flex-col px-6 py-2 gap-4">
          <p className="text-xl">Payee</p>
          <div>
            <div className="dropdown dropdown-bottom w-full">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex justify-between"
              >
                <p>Write Here</p>
                <p>↓</p>
              </div>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Item 1</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl">Note</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full h-full self-stretch"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
