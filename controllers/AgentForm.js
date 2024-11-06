const Agent = require("../models/AgentFormSchema");

exports.AgentForm = async (req,res)=>{
    try{
        const agentForm = new Agent(req.body);
        await agentForm.save();
        console.log('Agent Form submitted successfully');
        res.status(200).send({agentForm});
    }catch(err){
        res.status(400).send({error:err.message});
    }
}