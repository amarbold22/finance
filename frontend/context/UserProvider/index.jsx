import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formUserData, setFormUserData] = useState({
    email: "amar@gmail.com",
    password1: "pass12345",
    password2: "pass12345",
    name: "",
    currency_type: "",
    balance: 0,
  });

  const changeFormUserData = (key, value) => {
    setFormUserData({ ...formUserData, [key]: value });
  };

  const login = async () => {
    if (!formUserData.email || !formUserData.password) {
      alert("Email or Password can't be empty");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8008/api/auth/signin",
        {
          userEmail: formUserData.email,
          userPassword: formUserData.password,
        }
      );
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`, { autoClose: 3000 });
    }
  };

  const signup = async () => {
    if (
      !formUserData.name ||
      !formUserData.email ||
      !formUserData.password1 ||
      !formUserData.password2
    ) {
      alert("Boxes can't be empty");
      return;
    }
    if (formUserData.password1 !== formUserData.password2) {
      alert("Passwords must be same");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8008/api/auth/signup",
        {
          name: formUserData.name,
          email: formUserData.email,
          password: formUserData.password1,
        }
      );
      setUser(data.user);
      router.push("/signup/step1");
    } catch (err) {
      toast.error(`${err.message}`, { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        formUserData,
        changeFormUserData,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
