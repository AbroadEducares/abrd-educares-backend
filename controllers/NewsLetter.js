    const NewsLetter = require("../models/NewsLetterSchema");

    exports.NewsLetter = async (req,res)=>{
        try{
            const newsLetter = new NewsLetter(req.body);
            console.log(newsLetter)
            await newsLetter.save();
            res.status(200).send(newsLetter);
        }
        catch(error){
            res.status(400).send({error:error.message});
        }
    }