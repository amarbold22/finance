import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    transaction_name: "buuz",
    amount: 10000,
    transaction_type: "EXP",
    description: "this is a food with friend",
    categoryId: "",
    updated_at: "",
  });

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await axios.post("http://localhost:8008/transactions", {
        ...transactionData,
        // userId: "06abd39d-0523-4749-b99e-28dc147ad222",
      });
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  return (
    <TransactionContext.Provider
      value={{ transactionData, changeTransactionData, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;