
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

console.log(require('dotenv').config());
cloudinary.uploader.upload('vid/violence_8.mp4', {
    resource_type: 'video',
    use_filename:true, 
    unique_filename:false, 
    folder:'violence',
    upload_preset:'vid_preset'

})
    .then(uploadResult => console.log(JSON.stringify(uploadResult)))
    .catch(error => console.log(error));
