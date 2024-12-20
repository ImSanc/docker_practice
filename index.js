import express from "express";
import mongoose from "mongoose";
import { DB_URL } from "./key.js";

mongoose.connect(DB_URL,{});

const EntrySchema = new mongoose.Schema({
    text : String,
    date : {type : Date, default: Date.now}
});

const Entry = mongoose.model('Entry',EntrySchema);
const app = express();

app.listen(3000, ()=>{
    console.log(`Example app listening to port 3000`);
});

app.get("/", async (request , response)=>{
    
    try{
        const entry = new Entry({text : "This is an entry"});
        await entry.save();
        response.send('Entry added!');
    }
    catch(err){
        response.status(500).send("Error occurred!!");
    }
});

