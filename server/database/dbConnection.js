import mongoose from "mongoose";

export const dbConnection=()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_TASK_MANAGEMENT"
    }).then(() => {
        console.log("Database se connection safal hua!!")
    })
    .catch((err) => {
        console.log(`Chinta ka vishay hai janab... Error aarela hai! : ${err}`)
    })
}