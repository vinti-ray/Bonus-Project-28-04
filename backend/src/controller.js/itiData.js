const itiModel=require("../model/createIti")
const {uploadFile}=require("../aws/aws")
const createIti=async (req,res)=>{
    try {
        let data=req.body
        let files=req.files
        let uploadFileUrl=await uploadFile(files[0])
        data.profileImage=uploadFileUrl

        const createData=await itiModel.create(data)
        return res.status(201).send({status:true,data:createData})
        
    } catch (e) {
        return res.status(500).send({status:false,message:e.message})
        
    }
}

const getData=async(req,res)=>{
    try {
        const getData=await itiModel.find()
        return res.status(200).send({status:true,data:getData})
    } catch (error) {
        return res.status(500).send({status:false,message:e.message})
    }
}
const getById=async(req,res)=>{
    try {
        let id=req.params.id
        console.log(id);
        const getData=await itiModel.findById(id)
        return res.status(200).send({status:true,data:getData})
    } catch (error) {
        return res.status(500).send({status:false,message:e.message})
    }
}


const updateIti=async (req,res)=>{
    let data=req.body
    let files = req.files // Get the file to upload
	
    if (files && files.length > 0) {
        let uploadFileUrl = await uploadFile(files[0])
        data.profileImage = uploadFileUrl
    }
    let id=req.params.id
    await itiModel.findByIdAndUpdate(id,data)
    return res.status(200).send({status:true,message:"updated successfully"})
}
module.exports={createIti,getData,updateIti,getById}
