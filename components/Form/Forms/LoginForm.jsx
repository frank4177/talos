"use client";

import React, { useState } from "react";
import TextField from "../FormElements/TextField/TextField";
import { request } from "@/config/config";
import Button from "@/components/shared/Buttons/Button";
import Spinner from "@/components/shared/Loaders/Spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/features/userSlice";


const LoginForm = () => {
  const navigate = useRouter("")
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setErrorMessage()
    const { name, value } = e.target;
    const data = { ...payload };
    data[name] = value;
    setPayload(data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await request.post(`/login`,  payload );
      console.log(res);
      if (res?.data?.message === "Incrorrect Login Details") {
        setErrorMessage("Incrorrect login details")
      }
      if (res?.data?.message === "Login Successful") {
        dispatch(loginUser(payload))
        navigate.push("/dashboard")
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      
      
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[40px] mb-4">
            Talo<span className="text-violet-600">Social</span>
          </p>
          <h3 className="mb-1 font-bold text-[25px]">Log into your account</h3>
          <p className="text-[14px]">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form
          className="flex flex-col gap-3 mt-7 w-full"
          onSubmit={handleLogin}
        >
          <TextField
            title="Username"
            name="username"
            type="text"
            handleChange={handleChange}
          />
          <TextField
            title="Password"
            name="password"
            type="password"
            handleChange={handleChange}
          />

          <p className="text-red-600 text-[14px]">{errorMessage}</p>
          <Button title="Log in" height={35} loader={<Spinner height={20} width={20} />} loading={isLoading}/>

          <Link href="/register" className="self-center">
            Dont have an account? <span className="text-violet-600 cursor-pointer">Sign Up</span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
