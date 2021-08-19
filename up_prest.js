
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

console.log(require('dotenv').config());
cloudinary.api.create_upload_preset({
    name:'vid_preset',
    unsigned:false,
    use_filename:true, 
    unique_filename:false, 
    folder:'violence'
})
    .then(uploadResult => console.log(JSON.stringify(uploadResult)))
    .catch(error => console.log(error));
