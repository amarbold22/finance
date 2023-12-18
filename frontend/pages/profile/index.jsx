import React, { useContext, useState } from "react";
import Image from "next/image";
import { UserContext } from "@/context/UserProvider";

const Profile = () => {
  const {} = useContext(UserContext);
  const [editOn, setEditOn] = useState(false);
  const [username, setUsername] = useState("Amarbold");
  const [email, setEmail] = useState("amr@gmail.com");
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-[600px] h-[600px] bg-blue-500 rounded-2xl overflow-hidden">
          <div className="flex flex-col gap-6 text-xl py-10 pl-6 items-start w-1/3 text-blue-400 bg-yellow-400 rounded-xl t">
            <p className="hover:text-pink-500 hover:cursor-pointer">
              My Profile
            </p>
            <p className="hover:text-pink-500 hover:cursor-pointer">Profile</p>
            <p className="hover:text-pink-500 hover:cursor-pointer">
              Privacy & Safety
            </p>
            <p className="hover:text-pink-500 hover:cursor-pointer">Devices</p>
            <p className="hover:text-pink-500 hover:cursor-pointer">
              Authorized Apps
            </p>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-start py-8">
            <div className="rounded-full w-40 h-40 overflow-hidden text-white">
              <Image src="/avatar.avif" alt="avatar" width={300} height={300} />
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="flex items-center gap-1 text-black font-semibold py-4"
                onClick={() => {
                  if (editOn) setEditOn(false);
                  else setEditOn(true);
                  console.log(editOn);
                }}
              >
                <p>Edit</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.3103 6.87842L17.1216 2.68873C16.9823 2.5494 16.8169 2.43888 16.6349 2.36348C16.4529 2.28808 16.2578 2.24927 16.0608 2.24927C15.8638 2.24927 15.6687 2.28808 15.4867 2.36348C15.3047 2.43888 15.1393 2.5494 15 2.68873L3.43969 14.25C3.2998 14.3888 3.18889 14.554 3.11341 14.736C3.03792 14.918 2.99938 15.1132 3.00001 15.3103V19.5C3.00001 19.8978 3.15804 20.2793 3.43935 20.5606C3.72065 20.8419 4.10218 21 4.50001 21H8.6897C8.88675 21.0006 9.08197 20.9621 9.26399 20.8866C9.44602 20.8111 9.61122 20.7002 9.75001 20.5603L21.3103 8.99998C21.4496 8.86069 21.5602 8.69531 21.6356 8.5133C21.711 8.33129 21.7498 8.13621 21.7498 7.9392C21.7498 7.74219 21.711 7.5471 21.6356 7.36509C21.5602 7.18308 21.4496 7.01771 21.3103 6.87842ZM4.81032 15L13.2806 6.52967L14.8444 8.09435L6.37501 16.5637L4.81032 15ZM4.50001 16.8103L7.1897 19.5H4.50001V16.8103ZM9.00001 19.1897L7.43532 17.625L15.9056 9.15467L17.4694 10.7194L9.00001 19.1897Z"
                    fill="#343330"
                  />
                </svg>
              </button>
            </div>
            {editOn && (
              <input
                type="file"
                className="file-input file-input-bordered w-2/3 h-8 my-6"
              />
            )}
            {editOn && (
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex items-center gap-3 justify-start">
                  <p className="gap-6 text-white font-semibold w-20">
                    Username:
                  </p>
                  <input
                    type="text"
                    value={username}
                    className="input input-bordered w-1/2"
                    onKeyDown={(key) => {
                      if (key === "enter") setEditOn(false);
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 justify-start">
                  <p className="gap-6 text-white font-semibold w-20">Email:</p>
                  <input
                    type="text"
                    value={email}
                    className="input input-bordered w-1/2"
                    onKeyDown={(key) => {
                      if (key === "enter") setEditOn(false);
                    }}
                  />
                </div>
              </div>
            )}
            {!editOn && (
              <>
                <div className="flex text-white font-semibold gap-2 justify-start">
                  <p>Username:</p>
                  <p>{username}</p>
                </div>
                <div className="flex text-white font-semibold gap-2 justify-start">
                  <p>Email:</p>
                  <p>{email}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
