"use client"
import NavBar from "./pages/navbar";
import { useEffect, useState } from "react";
export default function Home() {

  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then(response => response.json()
  ).then(
    data => {
      console.log(data);
      setMessage(data.message)
    }
  )
}, []);

  return (
    <>
    <NavBar/>
    <div>{message}</div>
    </>
  )
}

