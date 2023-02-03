const mongoose = require('mongoose')

module.exports = function(){
    
    mongoose.connect(`mongodb://dhrumilam:QFGGgsH135RDTwpEMDtI@15.206.7.200:28017/dhrumilam?authSource=admin&readPreference=primary&directConnection=true&ssl=false`, ()=>{
        console.log(`MongoDb is Successfully Connected`);
        console.log(`Guest Website Server is running on port number : 5000 `);
    })
}
