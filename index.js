import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(3000, ()=>{
    console.log(`Example app listening to port 3000`);
});

app.get("/", (request , response)=>{
    response.sendFile(path.join(__dirname, "index.html"));
})

