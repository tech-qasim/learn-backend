// require("dotenv").config({ path: "/.env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at ${process.env.PORT}}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed ", err);
  });

// const app = express()(async () => {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   app.on("error", (error) => {
//     console.log('ERROR:',error);
//     throw error;
//   })

//   app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on port ${process.env.PORT}`);
//   })
//   try {
//   } catch (e) {
//     console.error("ERROR :", error);
//   }
// })();
