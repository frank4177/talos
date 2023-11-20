"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const token = useSelector((state) => state?.user.currentUser);
  const router = useRouter();

if (!token) {
    router.push("/")
}else{
    return <><div>{children}</div></>
}
};

export default AuthProvider;