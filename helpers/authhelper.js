import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
  try{
    const saltsRounds = 10;
    const hashedpassword = await bcrypt.hash(password,saltsRounds)
    return hashedpassword
  }catch(error){
   console.log(error)
  }
}

export const  comparePassword = async (password,hashPassword)=>{
  return bcrypt.compare(password,hashPassword )

}