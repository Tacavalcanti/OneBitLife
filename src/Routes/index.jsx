import {useState} from "react";
import AllPages from "./allPages";
import HomePage from "./HomePage";

export default function Routes(){
   const[ShowHome, setShowHome]=useState("false");
   return <>{ShowHome ==="true" ? <HomePage/> : <AllPages/>}</>
}