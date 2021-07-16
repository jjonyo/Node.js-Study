import multer from 'multer'

const upload = multer({dest : 'uploads/'})

export const uploadProfileImage = upload.single('profileImage') 