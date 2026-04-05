const  Note = require('../model/noteModel')

exports.getNotes = async(req,res) =>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes)
    }
    catch(err){
        res.status(500).json({message:"Error Fetching Notes"})
    }
}


exports.createNote = async(req,res)=>{
    try{
        const {title, content} = req.body;
        const newNote = await Note.create({title, content});
        res.status(201).json(newNote);
    }
    catch(err){
        res.status(500).json({message:"Error Fetching Notes"})
    }
}


exports.updateNote = async(req,res)=>{
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(200).json(updatedNote);
    }
    catch(err){
        res.status(500).json({ message: "Error Updating Note" });
    }
}


exports.deleteNote = async(req,res)=>{
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note Deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error Deleting Note" });
    }
}