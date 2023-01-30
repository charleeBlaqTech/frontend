const express               =require('express')
const bcrypt                =require('bcrypt');
const jwt                   =require('jsonwebtoken');
const isLoggedIn            =require('../middlewares/isLoggedIn');
const user                  =require('../models/userModel')
const sheet                 =require('../models/sheetModel')


const homeGet= (req,res)=>{
    res.render("index")
}

const logoutGet=async(req,res)=>{
    await res.cookie("auth", "",{maxAge:10})
        res.redirect('/login')
}

const loginGet=  (req,res)=>{
    res.render("login", {layout:"others"})
}

const loginPost= async (req,res)=>{
    const {email,password}=req.body
    const userFound= await user.findOne({email:email})
    if(!userFound){
        res.render('login',{ERROR: "the email entered is not found."})
    }else{
        const userPassword=userFound.password
        const confirmedPassword= await bcrypt.compareSync(password, userPassword)
        
        if(confirmedPassword === true){
            const userId=userFound._id
            const token=await jwt.sign(({userId}), "thisisthebeginningofgreaterthingsinmylife",{expiresIn:360})

            res.cookie("auth", token,{maxAge:360000})
            res.render('index',{userFound})
        }else{
            res.render('login',{ERROR:"email and password mismatched."})
        }
    }
}

const registerGet= (req,res)=>{
    res.render("signup",{layout:"others"})
}
const registerPost= async(req,res)=>{
    const newUserDetail=req.body
    const newUser=await user.create({
        firstname:newUserDetail.FirstName,
        lastname:newUserDetail.LastName,
        password:newUserDetail.password,
        email:newUserDetail.email

    }).then(async response => {
        const userFound= await user.findOne({email:newUserDetail.email})
        const userId=userFound._id
        const token=await jwt.sign(({userId}), "thisisthebeginningofgreaterthingsinmylife",{expiresIn:360})
        res.cookie("auth", token,{maxAge:360000})
        res.render('index',{userFound})
    }).catch((error)=>{
        res.status(404).json({message:error.message})
        
    })
    
}

const sheetPost=async(req,res)=>{
   try {
    const formData=req.body
    const newSheet=await sheet.create({
        projectTitle:formData.title,
        executiveProducer:{
            firstName:formData.EfirstName,
            lastName:formData.ElasttName
        },
        producer:{
            firstName:formData.pfirstName,
            lastName:formData.plastName
        },
        director:{
            firstName:formData.DfirstName,
            lastName:formData.DlastName
        },
        assistantDirector:{
            firstName:formData.asstDfirstName,
            lastName:formData.asstDlastName
        },
        productionManager:{
            firstName:formData.MfirstName,
            lastName:formData.MlastName
        },
        productionDate:formData.productionDate,
        sunrise:formData.sunrise,
        sunset:formData.sunset,
        weather:formData.weather,
        parkingNote:formData.parkingNote,
        locations:{
            locationDetails:[{id:formData.locationId1,location:formData.locationLocation1,hospital:formData.locationHospital1},{id:formData.locationId2,location:formData.locationLocation2,hospital:formData.locationHospital2}]
           },
        scenes:{
            sceneDetails:[{id:formData.sceneId1,
                            desc:formData.sceneDescription1,
                            cast:formData.sceneCast1,
                            page:formData.scenePage1,
                            dn:formData.sceneDN1,
                            note:formData.sceneNote1
                            },
                            {id:formData.sceneId2,
                                desc:formData.sceneDescription2,
                                cast:formData.sceneCast2,
                                page:formData.scenePage2,
                                dn:formData.sceneDN2,
                                note:formData.sceneNote2
                            },
                            {id:formData.sceneId3,
                                desc:formData.sceneDescription3,
                                cast:formData.sceneCast3,
                                page:formData.scenePage3,
                                dn:formData.sceneDN3,
                                note:formData.sceneNote3
                            },
                            {id:formData.sceneId4,
                                desc:formData.sceneDescription4,
                                cast:formData.sceneCast4,
                                page:formData.scenePage4,
                                dn:formData.sceneDN4,
                                note:formData.sceneNote4
                            },
                            {id:formData.sceneId5,
                                desc:formData.sceneDescription5,
                                cast:formData.sceneCast5,
                                page:formData.scenePage5,
                                dn:formData.sceneDN5,
                                note:formData.sceneNote5
                            },
                            
                        ]

        },
        casts:{
            castDetails:[
                {
                    id:formData.castId1,
                    instruction:formData.castInstruction1,
                    casts:formData.castCasts1,
                    callTime:formData.castCallTime1,
                    character:formData.castCharacter1
                },
                {
                    id:formData.castId2,
                    instruction:formData.castInstruction2,
                    casts:formData.castCasts2,
                    callTime:formData.castCallTime2,
                    character:formData.castCharacter2
                },
                {
                    id:formData.castId3,
                    instruction:formData.castInstruction3,
                    casts:formData.castCasts3,
                    callTime:formData.castCallTime3,
                    character:formData.castCharacter3
                },
                {
                    id:formData.castId4,
                    instruction:formData.castInstruction4,
                    casts:formData.castCasts4,
                    callTime:formData.castCallTime4,
                    character:formData.castCharacter4
                },
                {
                    id:formData.castId5,
                    instruction:formData.castInstruction5,
                    casts:formData.castCasts5,
                    callTime:formData.castCallTime5,
                    character:formData.castCharacter5
                },
                {
                    id:formData.castId6,
                    instruction:formData.castInstruction6,
                    casts:formData.castCasts6,
                    callTime:formData.castCallTime6,
                    character:formData.castCharacter6
                },
                {
                    id:formData.castId7,
                    instruction:formData.castInstruction7,
                    casts:formData.castCasts7,
                    callTime:formData.castCallTime7,
                    character:formData.castCharacter7
                }
            ]
        },
        crews:{
            crewDetails:[
                {
                    Id:formData.crewId1,
                    postn:formData.crewPosition1,
                    name:formData.crewName1,
                    number:formData.crewNumber1,
                    email:formData.crewEmail1,
                    call:formData.crewCall1

                },
                {
                    Id:formData.crewId2,
                    postn:formData.crewPosition2,
                    name:formData.crewName2,
                    number:formData.crewNumber2,
                    email:formData.crewEmail2,
                    call:formData.crewCall2

                },
                {
                    Id:formData.crewId3,
                    postn:formData.crewPosition3,
                    name:formData.crewName3,
                    number:formData.crewNumber3,
                    email:formData.crewEmail3,
                    call:formData.crewCall3

                },
                {
                    Id:formData.crewId4,
                    postn:formData.crewPosition4,
                    name:formData.crewName4,
                    number:formData.crewNumber4,
                    email:formData.crewEmail4,
                    call:formData.crewCall4

                },
                {
                    Id:formData.crewId5,
                    postn:formData.crewPosition5,
                    name:formData.crewName5,
                    number:formData.crewNumber5,
                    email:formData.crewEmail5,
                    call:formData.crewCall5

                },
                {
                    Id:formData.crewId6,
                    postn:formData.crewPosition6,
                    name:formData.crewName6,
                    number:formData.crewNumber6,
                    email:formData.crewEmail6,
                    call:formData.crewCall6

                },
                {
                    Id:formData.crewId7,
                    postn:formData.crewPosition7,
                    name:formData.crewName7,
                    number:formData.crewNumber7,
                    email:formData.crewEmail7,
                    call:formData.crewCall7

                },
                ]
           }
    })
    res.redirect("/")
   } catch (error) {
    res.status(404).json({message:error.message})
   }
}

const profileGet=async(req,res)=>{
    try {
        if(req.user){
            const currentUserId= req.user._id
            const currentUserDetails= await user.findOne({_id:currentUserId})
            
            res.render("account",{currentUserDetails, layout:"others"})
        }else{
            res.redirect("/login")
        }   
    } catch (error) {
         res.status(404).json({message:error.message})
    }

   
}

const profileUpdateEmail=async(req,res)=>{
    try {
        if(req.user){
            const {upDateEmail}=req.body
            const currentUserId= req.user._id
            const currentUserDetails= await user.findOne({_id:currentUserId})
            currentUserDetails.email=upDateEmail
            currentUserDetails.save()
            res.redirect("/profile")  
            
        }else{
            res.redirect("/login")
        }
        
    } catch (error) {
         res.status(404).json({message:error.message})
    }

   
}

const profileUpdatePassword= async(req,res)=>{
    try {
     if(req.user){
         const {upDatePassword}=req.body
         const currentUserId= req.user._id
         const currentUserDetails= await user.findOne({_id:currentUserId})
         currentUserDetails.password=upDatePassword
         currentUserDetails.save()
         res.redirect("/profile")
     }else{
     res.redirect("/login")
     }
    } catch (error) {
     res.status(404).json({message:error.message})
    }
 }

const deleteAccount=async(req,res)=>{
    const accountId= req.params.id
    await user.deleteOne({_id:accountId})
    res.redirect('/login')
}

const sheetsGet=async(req,res)=>{
    const allSheets= await sheet.find({})
    
    res.render("projects",{allSheets})
}

const sheetShow=async(req,res)=>{
    try {
     const sheetId=req.params.id
     const getOneSheet= await sheet.findOne({_id:sheetId})
 
     res.render("userlanding", {getOneSheet})
    } catch (error) {
     res.status(401).json({message:error.message})
    }
 }



module.exports={loginGet,loginPost,registerGet,registerPost,sheetPost,homeGet,profileGet,profileUpdateEmail,profileUpdatePassword,deleteAccount,logoutGet,sheetsGet,sheetShow}
