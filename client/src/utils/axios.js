"use client";
import axios from "axios";

// console.log("url is " + process.env.NEXT_PUBLIC_SERVER_URL);

const AxiosClient = axios.create({
  baseURL: "http://localhost:8000",
  //   headers: { "X-Custom-Header": "foobar" }
});

export default AxiosClient;
