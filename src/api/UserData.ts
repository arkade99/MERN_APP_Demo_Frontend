import axios from "axios";
import React from "react";
import client from "./client";
import auth from "../auth/auth";

interface payloadType {
  userName: string;
  userEmail: string;
  userPw: string;
}

export const signin = (payload: payloadType) => {
  const response = client({
    path: "/user/create",
    reqType: "post",
    payloadData: payload,
  });
  return response;
};

export const getData = () => {
  const response = client({
    path: "/user/list",
    reqType: "get",
    payloadData: {},
  });
  return response;
};

export const login = (payload: { userEmail: string; userPw: string }) => {
  const response = auth({
    path: "/user/login",
    reqType: "post",
    payloadData: payload,
  });
  console.log("api/login", response);
  return response;
};
