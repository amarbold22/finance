import { TransactionContext } from "@/context/TransactionContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "../../utils/moment";

const Modal = () => {
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const [icons, setIcons] = useState([
    {
      name: "House",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 10.8329V19.5001C21 19.8979 20.842 20.2795 20.5607 20.5608C20.2794 20.8421 19.8978 21.0001 19.5 21.0001H15.75C15.3522 21.0001 14.9706 20.8421 14.6893 20.5608C14.408 20.2795 14.25 19.8979 14.25 19.5001V15.7501C14.25 15.5512 14.171 15.3604 14.0303 15.2198C13.8897 15.0791 13.6989 15.0001 13.5 15.0001H10.5C10.3011 15.0001 10.1103 15.0791 9.96967 15.2198C9.82902 15.3604 9.75 15.5512 9.75 15.7501V19.5001C9.75 19.8979 9.59196 20.2795 9.31066 20.5608C9.02936 20.8421 8.64782 21.0001 8.25 21.0001H4.5C4.10218 21.0001 3.72064 20.8421 3.43934 20.5608C3.15804 20.2795 3 19.8979 3 19.5001V10.8329C2.99997 10.6253 3.04303 10.42 3.12646 10.2299C3.20989 10.0398 3.33187 9.86907 3.48469 9.72855L10.9847 2.6523L10.995 2.64199C11.2711 2.39086 11.631 2.25171 12.0042 2.25171C12.3775 2.25171 12.7373 2.39086 13.0134 2.64199C13.0166 2.64566 13.0201 2.6491 13.0238 2.6523L20.5238 9.72855C20.675 9.86981 20.7954 10.0409 20.8774 10.2309C20.9594 10.421 21.0011 10.6259 21 10.8329Z"
            fill="#343330"
          />
        </svg>
      ),
      id: "",
    },
    {
      name: "Food",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22.5 19.5001H21V10.8329C21 10.6253 20.957 10.42 20.8735 10.2299C20.7901 10.0398 20.6681 9.86907 20.5153 9.72855L13.0153 2.6523C13.0116 2.6491 13.0082 2.64566 13.005 2.64199C12.7289 2.39086 12.369 2.25171 11.9958 2.25171C11.6225 2.25171 11.2627 2.39086 10.9866 2.64199L10.9762 2.6523L3.48469 9.72855C3.33187 9.86907 3.20989 10.0398 3.12646 10.2299C3.04303 10.42 2.99997 10.6253 3 10.8329V19.5001H1.5C1.30109 19.5001 1.11032 19.5791 0.96967 19.7198C0.829018 19.8604 0.75 20.0512 0.75 20.2501C0.75 20.449 0.829018 20.6398 0.96967 20.7804C1.11032 20.9211 1.30109 21.0001 1.5 21.0001H22.5C22.6989 21.0001 22.8897 20.9211 23.0303 20.7804C23.171 20.6398 23.25 20.449 23.25 20.2501C23.25 20.0512 23.171 19.8604 23.0303 19.7198C22.8897 19.5791 22.6989 19.5001 22.5 19.5001ZM14.25 19.5001H9.75V15.0001C9.75 14.8012 9.82902 14.6104 9.96967 14.4698C10.1103 14.3291 10.3011 14.2501 10.5 14.2501H13.5C13.6989 14.2501 13.8897 14.3291 14.0303 14.4698C14.171 14.6104 14.25 14.8012 14.25 15.0001V19.5001Z"
            fill="#343330"
          />
        </svg>
      ),
      id: "08f9b410-c8a4-4823-b879-e397240a719d",
    },
    {
      name: "Bank",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.75 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V3.75C20.25 3.35218 20.092 2.97064 19.8107 2.68934C19.5294 2.40804 19.1478 2.25 18.75 2.25ZM9 4.5H15C15.1989 4.5 15.3897 4.57902 15.5303 4.71967C15.671 4.86032 15.75 5.05109 15.75 5.25C15.75 5.44891 15.671 5.63968 15.5303 5.78033C15.3897 5.92098 15.1989 6 15 6H9C8.80109 6 8.61032 5.92098 8.46967 5.78033C8.32902 5.63968 8.25 5.44891 8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5ZM16.9509 18.6C16.8721 18.6592 16.7824 18.7024 16.6869 18.7269C16.5914 18.7514 16.492 18.7569 16.3944 18.7429C16.2968 18.729 16.2028 18.696 16.118 18.6457C16.0332 18.5954 15.9591 18.5289 15.9 18.45C15.4459 17.8445 14.8571 17.3531 14.1802 17.0147C13.5032 16.6762 12.7568 16.5 12 16.5C11.2432 16.5 10.4968 16.6762 9.81983 17.0147C9.14291 17.3531 8.55409 17.8445 8.1 18.45C8.04091 18.5288 7.96687 18.5952 7.88212 18.6454C7.79737 18.6955 7.70357 18.7285 7.60607 18.7425C7.50856 18.7564 7.40927 18.751 7.31386 18.7265C7.21845 18.7021 7.12879 18.6591 7.05 18.6C6.97121 18.5409 6.90482 18.4669 6.85464 18.3821C6.80446 18.2974 6.77147 18.2036 6.75754 18.1061C6.74361 18.0086 6.74902 17.9093 6.77346 17.8139C6.79791 17.7185 6.8409 17.6288 6.9 17.55C7.56411 16.6596 8.44971 15.9586 9.46875 15.5166C8.91029 15.0067 8.51903 14.3399 8.34631 13.6037C8.17359 12.8675 8.22749 12.0962 8.50093 11.3912C8.77436 10.6862 9.25456 10.0803 9.87851 9.65304C10.5025 9.2258 11.241 8.99718 11.9972 8.99718C12.7534 8.99718 13.4919 9.2258 14.1159 9.65304C14.7398 10.0803 15.22 10.6862 15.4934 11.3912C15.7669 12.0962 15.8208 12.8675 15.6481 13.6037C15.4753 14.3399 15.0841 15.0067 14.5256 15.5166C15.5467 15.9577 16.4343 16.6588 17.1 17.55C17.2194 17.709 17.2708 17.909 17.2429 18.1059C17.2149 18.3028 17.1099 18.4805 16.9509 18.6ZM14.25 12.75C14.25 13.195 14.118 13.63 13.8708 14C13.6236 14.37 13.2722 14.6584 12.861 14.8287C12.4499 14.999 11.9975 15.0436 11.561 14.9568C11.1246 14.87 10.7237 14.6557 10.409 14.341C10.0943 14.0263 9.88005 13.6254 9.79323 13.189C9.70642 12.7525 9.75097 12.3001 9.92127 11.889C10.0916 11.4778 10.38 11.1264 10.75 10.8792C11.12 10.632 11.555 10.5 12 10.5C12.5967 10.5 13.169 10.7371 13.591 11.159C14.0129 11.581 14.25 12.1533 14.25 12.75Z"
            fill="#343330"
          />
        </svg>
      ),
      id: "f7c44b15-ad6e-434b-ae9a-283e8210f9f9",
    },
    {
      name: "Finance",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.5 11.25C10.5 11.5467 10.412 11.8367 10.2472 12.0834C10.0824 12.33 9.84811 12.5223 9.57403 12.6358C9.29994 12.7494 8.99834 12.7791 8.70736 12.7212C8.41639 12.6633 8.14912 12.5204 7.93934 12.3107C7.72956 12.1009 7.5867 11.8336 7.52882 11.5426C7.47094 11.2517 7.50065 10.9501 7.61418 10.676C7.72771 10.4019 7.91997 10.1676 8.16665 10.0028C8.41332 9.83797 8.70333 9.75 9 9.75C9.39782 9.75 9.77936 9.90804 10.0607 10.1893C10.342 10.4706 10.5 10.8522 10.5 11.25ZM21.75 5.25V18.75C21.75 19.1478 21.592 19.5294 21.3107 19.8107C21.0294 20.092 20.6478 20.25 20.25 20.25H3.75C3.35218 20.25 2.97064 20.092 2.68934 19.8107C2.40804 19.5294 2.25 19.1478 2.25 18.75V5.25C2.25 4.85218 2.40804 4.47064 2.68934 4.18934C2.97064 3.90804 3.35218 3.75 3.75 3.75H20.25C20.6478 3.75 21.0294 3.90804 21.3107 4.18934C21.592 4.47064 21.75 4.85218 21.75 5.25ZM12.7266 15.5625C12.4839 14.6563 11.9084 13.875 11.115 13.3744C11.5363 12.9555 11.8238 12.421 11.941 11.8386C12.0582 11.2562 11.9999 10.652 11.7733 10.1028C11.5468 9.55361 11.1623 9.08402 10.6686 8.75358C10.1748 8.42315 9.5941 8.24675 9 8.24675C8.4059 8.24675 7.82517 8.42315 7.33143 8.75358C6.8377 9.08402 6.45319 9.55361 6.22666 10.1028C6.00012 10.652 5.94175 11.2562 6.05896 11.8386C6.17616 12.421 6.46366 12.9555 6.885 13.3744C6.09211 13.8755 5.51681 14.6566 5.27344 15.5625C5.22371 15.7552 5.25257 15.9598 5.35366 16.1312C5.45475 16.3026 5.6198 16.4268 5.8125 16.4766C6.0052 16.5263 6.20975 16.4974 6.38118 16.3963C6.55259 16.2952 6.67683 16.1302 6.72656 15.9375C6.97406 14.9766 7.95094 14.25 9 14.25C10.0491 14.25 11.0269 14.9747 11.2734 15.9375C11.3232 16.1302 11.4474 16.2952 11.6188 16.3963C11.7902 16.4974 11.9948 16.5263 12.1875 16.4766C12.3802 16.4268 12.5452 16.3026 12.6463 16.1312C12.7474 15.9598 12.7763 15.7552 12.7266 15.5625ZM18.75 13.5C18.75 13.3011 18.671 13.1103 18.5303 12.9697C18.3897 12.829 18.1989 12.75 18 12.75H14.25C14.0511 12.75 13.8603 12.829 13.7197 12.9697C13.579 13.1103 13.5 13.3011 13.5 13.5C13.5 13.6989 13.579 13.8897 13.7197 14.0303C13.8603 14.171 14.0511 14.25 14.25 14.25H18C18.1989 14.25 18.3897 14.171 18.5303 14.0303C18.671 13.8897 18.75 13.6989 18.75 13.5ZM18.75 10.5C18.75 10.3011 18.671 10.1103 18.5303 9.96967C18.3897 9.82902 18.1989 9.75 18 9.75H14.25C14.0511 9.75 13.8603 9.82902 13.7197 9.96967C13.579 10.1103 13.5 10.3011 13.5 10.5C13.5 10.6989 13.579 10.8897 13.7197 11.0303C13.8603 11.171 14.0511 11.25 14.25 11.25H18C18.1989 11.25 18.3897 11.171 18.5303 11.0303C18.671 10.8897 18.75 10.6989 18.75 10.5Z"
            fill="#343330"
          />
        </svg>
      ),
      id: "aae62980-94b7-43fe-a85d-7eb97a6e2f75",
    },
  ]);

  const addRecord = async () => {
    await addTransaction();
    console.log(transactionData);
    setModal(false);
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/api/records");
    console.log("res", categories);
    setCategory(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
            <ul className="menu menu-horizontal bg-base-200 rounded-box w-full">
              {!modal && (
                <>
                  <button className="btn bg-blue-500 border-none w-1/2 rounded-full text-white">
                    Expense
                  </button>
                  <button
                    className="btn border-none w-1/2 rounded-full text-black hover:text-green-500"
                    onClick={() => {
                      setModal(true);
                      changeTransactionData("transaction_type", "EXP");
                      console.log(transactionData);
                    }}
                  >
                    Income
                  </button>
                </>
              )}
              {modal && (
                <>
                  <button
                    className="btn border-none w-1/2 rounded-full text-black"
                    onClick={() => {
                      setModal(false);
                      changeTransactionData("transaction_type", "INC");
                      console.log(transactionData);
                    }}
                  >
                    Expense
                  </button>
                  <button className="btn bg-green-500 border-none w-1/2 rounded-full text-white hover:text-green-500">
                    Income
                  </button>
                </>
              )}
            </ul>
          </div>
          <input
            name="amount"
            value={transactionData.amount}
            type="text"
            placeholder="Amount"
            className="input w-full placeholder:text-black bg-gray-300 py-4"
            onChange={(e) => {
              changeTransactionData(e.target.name, e.target.value);
            }}
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
              className="flex gap-4 dropdown-content z-[1] menu shadow bg-blue-100 rounded-box w-full text-lg text-gray-700"
            >
              <li>
                <a
                  onClick={() => {
                    document.getElementById("addRecords").close();
                    document.getElementById("categoryModal").showModal();
                  }}
                >
                  <div className="flex border-b-2 border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7468 9.41513 20.7185 6.93705 18.8907 5.10927C17.063 3.28149 14.5849 2.25323 12 2.25ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z"
                        fill="#0166FF"
                      />
                    </svg>
                  </div>
                  <p>Add Category</p>
                </a>
              </li>
              {/* <li>
                <a>Icon1</a>
              </li>
              <li>
                <a>Icon2</a>
              </li>
              <li>
                <a>Icon3</a>
              </li>
              <li>
                <a>Icon4</a>
              </li> */}
              {icons.map((el) => {
                return (
                  <li>
                    <button
                      className="flex gap-4"
                      onClick={(e) => {
                        e.preventDefault();
                        changeTransactionData("category_id", el.id);
                        console.log(transactionData);
                      }}
                    >
                      <div>{el.svg}</div>
                      {el.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col">
              <p className="text-lg pl-4">Date</p>
              <div className="flex-1">
                {/* <label className="label">
                  <span className="text-base label-text">Date</span>
                </label> */}
                <input
                  type="datetime-local"
                  placeholder="Oct 30,2023"
                  className="w-full input input-bordered bg-[#F9FAFB]"
                  name="updatedAt"
                  onChange={(e) => {
                    console.log("first", format(e.target.value));
                    changeTransactionData(
                      e.target.name,
                      format(e.target.value)
                    );
                  }}
                />
              </div>
            </div>

            {/* <div className="w-1/2 flex flex-col">
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
            </div> */}
          </div>
          {!modal && (
            <>
              <button
                className="btn bg-blue-500 rounded-full text-white"
                onClick={addRecord}
              >
                Add Record
              </button>
            </>
          )}
          {modal && (
            <>
              <button
                className="btn bg-green-500 rounded-full text-white"
                onClick={addRecord}
              >
                Add Record
              </button>
            </>
          )}
        </div>
        <div className="w-1/2 flex flex-col px-6 py-2 gap-4">
          <p className="text-xl">Payee</p>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg w-full h-full self-stretch"
              onChange={(e) => {
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
          <p className="text-xl">Note</p>
          <input
            name="description"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full h-full self-stretch"
            onChange={(e) => {
              changeTransactionData(e.target.name, e.target.value);
            }}
          />
        </div>
      </div>
      <>
        <dialog id="categoryModal" className="modal">
          <div className="modal-box flex flex-col gap-4 w-[500px]">
            <div className="flex justify-between px-4 border-b-1 border-gray-300">
              <p className="text-xl font-semibold">Add Category</p>
              <button
                className="text-xl"
                onClick={() => {
                  document.getElementById("categoryModal").close();
                  document.getElementById("addRecords").showModal();
                }}
              >
                X
              </button>
            </div>
            <div className="flex items-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 flex justify-between"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 10.8329V19.5001C21 19.8979 20.842 20.2795 20.5607 20.5608C20.2794 20.8421 19.8978 21.0001 19.5 21.0001H15.75C15.3522 21.0001 14.9706 20.8421 14.6893 20.5608C14.408 20.2795 14.25 19.8979 14.25 19.5001V15.7501C14.25 15.5512 14.171 15.3604 14.0303 15.2198C13.8897 15.0791 13.6989 15.0001 13.5 15.0001H10.5C10.3011 15.0001 10.1103 15.0791 9.96967 15.2198C9.82902 15.3604 9.75 15.5512 9.75 15.7501V19.5001C9.75 19.8979 9.59196 20.2795 9.31066 20.5608C9.02936 20.8421 8.64782 21.0001 8.25 21.0001H4.5C4.10218 21.0001 3.72064 20.8421 3.43934 20.5608C3.15804 20.2795 3 19.8979 3 19.5001V10.8329C2.99997 10.6253 3.04303 10.42 3.12646 10.2299C3.20989 10.0398 3.33187 9.86907 3.48469 9.72855L10.9847 2.6523L10.995 2.64199C11.2711 2.39086 11.631 2.25171 12.0042 2.25171C12.3775 2.25171 12.7373 2.39086 13.0134 2.64199C13.0166 2.64566 13.0201 2.6491 13.0238 2.6523L20.5238 9.72855C20.675 9.86981 20.7954 10.0409 20.8774 10.2309C20.9594 10.421 21.0011 10.6259 21 10.8329Z"
                      fill="#343330"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                      fill="#1F2937"
                    />
                  </svg>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80"
                >
                  <div className="grid grid-cols-6 gap-6 px-4 border-b-2 pb-2 border-black">
                    {icons.map((el) => {
                      return <a>{el.svg}</a>;
                    })}
                  </div>
                  <div className="flex justify-between py-4 px-4">
                    <button>
                      <div className="rounded-full w-6 h-6 bg-blue-400"></div>
                    </button>
                    <button>
                      <div className="rounded-full w-6 h-6 bg-orange-400"></div>
                    </button>
                    <button>
                      <div className="rounded-full w-6 h-6 bg-red-400"></div>
                    </button>
                    <button>
                      <div className="rounded-full w-6 h-6 bg-orange-400"></div>
                    </button>
                    <button>
                      <div className="rounded-full w-6 h-6 bg-green-400"></div>
                    </button>
                    <button>
                      <div className="rounded-full w-6 h-6 bg-yellow-400"></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 flex justify-between w-80"
                >
                  <p>Your name</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                      fill="#1F2937"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <p>Hi</p>
                  <p>Hi</p>
                </ul>
              </div>
            </div>
            <button className="btn w-full h-5 rounded-full text-white font-semibold text-xl btn-success">
              Add Category
            </button>
          </div>
        </dialog>
      </>
    </div>
  );
};

export default Modal;
