import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider";
import { toast } from "react-toastify";
import myAxios from "@/utils/axios"

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "",
    amount: 0,
    transaction_type: "EXP",
    description: "",
    category_id: "",
    updatedAt: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await myAxios.post("/api/transaction", {
        ...transactionData,
        user_id: user.user_id ,
        // "87fafb5d-4370-49bd-a339-90f985931f81",
      });
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllTransaction = async () => {
    try{
      const {
        data : { transactions },
      } = await myAxios.get(`/api/transaction/${user.user_id}`);
      setTransactions(transactions);
      console.log(transactions);
    }
    catch(error){
      console.log("TER", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлааa");
    }
  }

  useEffect(() => {
    getAllTransaction();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{ transactions, transactionData, changeTransactionData, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;