const mongoose      =require('mongoose')
const bcrypt        =require('bcrypt')
const Schema        = mongoose.Schema





const userSchema= new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    image:{
        type: String
    },
    joined:{
        type:Date,
        default: Date.now()
    }

})

userSchema.pre('save',async function(next){
        if(!this.isModified('password')){
            return next()
        }else{
            let password= this.password
            const salt= await bcrypt.genSalt(12)
            const hashedPassword= await bcrypt.hash(password, salt)
            this.password=hashedPassword
            next()
        }

})

const user=new mongoose.model('user', userSchema)

module.exports=user