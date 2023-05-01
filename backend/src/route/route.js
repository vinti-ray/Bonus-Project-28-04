const express=require("express")
const router=express.Router()
const {createIti,getData,updateIti,getById}=require("../controller.js/itiData")

router.post("/createiti",createIti)


router.get("/getIti",getData)
router.get("/getById/:id",getById)
router.put("/updateIti/:id",updateIti)



module.exports=router