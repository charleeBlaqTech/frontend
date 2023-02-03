// NODE NPM PACKAGES & LOCAL MODULES
const express               =require('express')
const exphbs                =require('express-handlebars')
const dotenv                =require('dotenv').config()
const mongoose              =require('mongoose')
const fileUpload            =require('express-fileupload')
const cookieParser          =require("cookie-parser")
const home=require('./routes/homeRoutes')


mongoose.set('strictQuery', false);
mongoose.connect( "mongodb://localhost:27017/film_callDB");









const app=express()

// MIDDLE-WARES & 3rd PARTY MODULES 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(fileUpload())
app.use(cookieParser())



// TEMPLATE-ENGINE=HBS
app.engine("hbs",exphbs.engine({
    extname: ".hbs", defaultLayout: "main", runtimeOptions:{
        allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault:true
    }
}))
app.set("view engine", "hbs")


// APP ROUTES
app.use(home)


app.listen(process.env.PORT || 1500)
