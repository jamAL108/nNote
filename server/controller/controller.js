import Note from '../model/note.js'

export const addnote =async(req,res)=>{
    try{
       const data = req.body;
       if(!data){
        return res.status(500).send({response:"Data Not Received"})
       }
       const newData = new Note({
        name:data.name,
        note:data.note
       })
       await newData.save()
       return res.status(200).send({response:"Data added"})
    }catch(err){
        console.log(err)
        return res.status(500).send({response:"Internal server issue"})
    }
}

export const deletenote =async(req,res)=>{
    try{
        console.log("delete")
       const id = req.params.id;
       console.log(id)
       const del = await Note.deleteOne({_id:id})
       return res.status(200).send({response:"Deleted"})
    }catch(err){
        console.log(err)
        return res.status(500).send({response:"Internal server issue"})
    }
}

export const getnote =async(req,res)=>{
    try{
        console.log("heloooo")
        const data = await Note.find({})
        console.log(data)
        return res.status(200).send({response:data})
    }catch(err){
        console.log(err)
        return res.status(500).send({response:"Internal server issue"})
    }
}

export const updatenote =async(req,res)=>{
    try{
       const data = req.body;
       const note = await Note.findOne({_id:data._id})
       note.name=data.name;
       note.note=data.note;
       await note.save()
       return res.status(200).send({response:"Done"})
    }catch(err){
        console.log(err)
        return res.status(500).send({response:"Internal server issue"})
    }
}