"use client";

import React, { useState } from "react";
import TextField from "../FormElements/TextField/TextField";
import { request } from "@/config/config";
import Button from "@/components/shared/Buttons/Button";
import Spinner from "@/components/shared/Loaders/Spinner";
import Link from "next/link";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const navigate = useRouter("")
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  console.log(payload);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...payload };
    data[name] = value;
    setPayload(data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (payload.username && payload.password) {
      try {
        const res = await request.post(`/register`,  payload );
        console.log(res);
        setIsLoading(false);
        Swal.fire({   
          title: 'Success',
          icon: 'success',
          allowOutsideClick: false,
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate.push("/")
          }
        })
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[40px] mb-4">
            Talo<span className="text-violet-600">Social</span>
          </p>
          <h3 className="mb-1 font-bold text-[25px]">Create a new account</h3>
          <p className="text-[14px]">
            To use Talosocial, please enter your details
          </p>
        </div>

        <form
          className="flex flex-col gap-3 mt-7 w-full"
          onSubmit={handleLogin}
        >
          <TextField
            title="Username"
            name="username"
            handleChange={handleChange}
          />
          <TextField
            title="Password"
            name="password"
            handleChange={handleChange}
          />
          <Button
            title="Sign Up"
            loader={<Spinner height={20} width={20} />}
            loading={isLoading}
            height={35}
          />

          <Link href="/" className="self-center">
            Already have an account?{" "}
            <span className="text-violet-600 cursor-pointer">Log in</span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
