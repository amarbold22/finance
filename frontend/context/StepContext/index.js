import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../UserProvider";
import { useRouter } from "next/router";

const {createContext, useState, useEffect, useContext} = require("react");
export const StepContext = createContext("light");

export const StepProvider = ({ children }) => {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);
    const [stepData, setStepData] = useState({
        currency_type: "",
        balance: 0
    });

    const changeStepData = (key, value) => {
        setStepData(() => ({ ...stepData, [key]: value }))
    }

    const goToDashboard = async () => {
        try{
            const { data } = await axios.put("http://localhost:8008/api/users/" + user.id, {
                currency_type: stepData.currency_type,
                balance: stepData.balance
            });
            console.log("adgsdgas", data);
            setUser(data.user);
            router.push("/dashboard"); 
            console.log(user);
        }
        catch(err){
            console.log("hi", err);
        }
    }

    return(
        <StepContext.Provider value={{ stepData, changeStepData, goToDashboard }}>
            {children}
        </StepContext.Provider>
    )
}