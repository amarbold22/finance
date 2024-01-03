import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import myAxios from "@/utils/axios";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState({
    transaction_name: "buuz",
    amount: 10000,
    transaction_type: "EXP",
    description: "this is a food with friend",
    categoryId: "",
    updated_at: "",
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const changeCategoryData = (key, value) => {
    setCategoryData({ ...categoryData, [key]: value });
  };

  const onSelectCategory = (name) => {
    console.log(name);

    if (selectedCategories.includes(name)) {
      const newCat = selectedCategories.filter((s) => s !== name);
      setSelectedCategories(newCat);
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const addCategory = async () => {
    try {
      const { data } = await myAxios.post("/categories", {
        ...categoryData,
        userId: "06abd39d-0523-4749-b99e-28dc147ad222",
      });

      setReFetch(!reFetch);
      toast.success("Ангилал амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Ангилал нэмэхэд алдаа гарлаа.");
    }
  };

  const getCategories = async () => {
    console.log("WORKING");
    try {
      const {
        data: { categories },
      } = await myAxios.get("/categories");

      setCategories(categories);
    } catch (error) {
      console.log("TER", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [reFetch]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        categoryData,
        changeCategoryData,
        addCategory,
        selectedCategories,
        onSelectCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;