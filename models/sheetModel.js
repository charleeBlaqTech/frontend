const mongoose      =require('mongoose')
const bcrypt        =require('bcrypt')
const Schema        = mongoose.Schema


const sheetSchema= new Schema({
    projectTitle:{
        type:String
    },
    executiveProducer:{
        firstName:String,
        lastName:String
    },
    producer:{
        firstName:String,
        lastName:String
    },
    director:{
        firstName:String,
        lastName:String
    },
    assistantDirector:{
        firstName:String,
        lastName:String
    },
    productionManager:{
        firstName:String,
        lastName:String
    },
    productionDate:{
        type: String
    },
    sunrise:{
        type: String
    },
    sunset:{
        type: String
    },
    weather:{
        type: String
    },
    parkingNote:{
        type: String
    },
   locations:{
    locationDetails:[],
   },
   scenes:{
    sceneDetails:[]
   },
   casts:{
    castDetails:[]
   },
   crews:{
    crewDetails:[]
   },
   
    created:{
        type:Date,
        default: Date.now()
    }

})



const sheet=new mongoose.model('sheet', sheetSchema)

module.exports=sheet