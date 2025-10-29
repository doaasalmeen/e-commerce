import express from "express";
import helmet from "helmet"; 
import morgan from 'morgan'; 


const app = express();
app.use(helmet()); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use(morgan('combined', 
{stream:{write:(message)=>logger.info(message.trim())}})); 

app.get("/", (req, res) => {
  logger.info('hello from logger'); 
  res.status(200).send("hello from app.js");
});

export default app;
