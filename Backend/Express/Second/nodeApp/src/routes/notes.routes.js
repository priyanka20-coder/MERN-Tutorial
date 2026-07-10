const express = require("express")
const router = express.Router()
const noteModel = require("../model/notes.model");

router.get("/notes",async (req,res)=>{
    const data = await noteModel.find()
    res.json(data);
})

router.post('/notes',async(req,res)=>{
    const {id,title} = req.body;
    const data = await noteModel.create({
        noteId: id,
        title:title

    });
    res.status(201).json(data);
});

router.put('/notes/:id',async(req,res)=>{
    const {id} = req.params;
    const {title} = req.body;
    const data = await noteModel.find();
    const exists = data.find((el)=>el.noteId == id)
    if(exists){
        const update = await noteModel.updateOne(
            {noteId: id},
            {title: title}
        )
        res.json({
            message:"Data Updated",
            title
        })
    }
});

router.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const data = await noteModel.find();
    if (data) {
        await noteModel.deleteOne({ noteId: id });
        res.json({
            message: "Data Deleted Successfully"
        });
    } else {
        res.json({
            message: "Data Not Found"
        });
    }
});

module.exports=router;
