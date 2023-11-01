import validator from "validator";
import mongoose from "mongoose";
import express from "express";

const isEmail = "some@gmail.com";
const app = express();
const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("hello")
})