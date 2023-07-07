import mongoose from 'mongoose'
const connectDB = async ()=>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`data base connected ${conn.connection.host}`.bgMagenta)

}catch(err) {
 console.log(`error to connect with DataBase: ${err}`.bgRed.white)
}
}  
export default connectDB;