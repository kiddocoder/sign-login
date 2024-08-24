const  express =  require("express");
const  cors =  require("cors");
const  CheckConnection  = require("./db");


require("dotenv").config();
const app = express();

app.use(cors());

const port = Number(process.env.PORT || 30025);

app.listen(port,()=>{
      console.log(`server is running on ${port}`)
      CheckConnection();
})
