import multer from "multer";


let storage =  multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "uploads/");
    },

    filename:(req, file, cb)=>{
        cb(null, Date.now() + file.originalname)
    }

})






// let upload = multer({
//     storage,
//     limits:{fileSize: 2 * 1024 * 1024}
// })


// export default upload


let upload = multer({
    storage:storage,
    limits:{fileSize: 2 * 1024 * 1024}, //2mb limit
    fileFilter:(req, file, cb)=>{
        //Accept image files only

        if(file.mimetype.startsWith("image/")){
            cb(null, true)
        }
        else{
            cb(new Error('Only image files are allowed!'), false)
        }
    }
})


export default upload



export let handleMulterError = (error, req, res, next)=>{
    if(error instanceof multer.MulterError){
        if(error.code  === "LIMIT_FILE_SIZE"){
            return res.status(400).json({
                error:"File too large. Maximum size is 2MB"
            })
        }

        return res.status(400).json({
            error:error.message
        })
    }

    else if(error){
        return res.status(400).json({
            error:error.message
        })
    }

    next()

}