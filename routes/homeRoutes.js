const express               =require('express')
const router                =express.Router();
const bcrypt                =require('bcrypt');
const jwt                   =require('jsonwebtoken');
const isLoggedIn            =require('../middlewares/isLoggedIn');
const user                  =require('../models/userModel')
const sheet                 =require('../models/sheetModel')
const homeController        =require('../controllers/homeControlls')




router.get('/',homeController.homeGet)

router.get('/logout',homeController.logoutGet)

router.get('/login',homeController.loginGet)

router.post('/login',homeController.loginPost)

router.get('/register',homeController.registerGet)

router.post('/register',homeController.registerPost)

router.post('/create-film',homeController.sheetPost)

router.get('/sheet/:id', homeController.sheetShow)

router.get('/sheets-get',isLoggedIn,homeController.sheetsGet)

router.get('/profile',isLoggedIn,homeController.profileGet)

router.post('/profile-update-email',isLoggedIn, homeController.profileUpdateEmail)

router.post('/profile-update-password',isLoggedIn, homeController.profileUpdatePassword)

router.post("/delete-account/:id",isLoggedIn,homeController.deleteAccount)


router.get('/help',(req,res)=>{
    res.render("help")
})

router.get('/send',(req,res)=>{
    res.render("send")
})


module.exports= router