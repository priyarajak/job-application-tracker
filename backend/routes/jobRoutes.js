const router = require("express").Router();
const Job = require("../models/Job")

const axios = require("axios")
const cheerio = require("cheerio")

router.get("/",async (req,res) => {
    const jobs = await Job.find().sort({date:-1});
    res.json(jobs);
})

router.post("/", async (req,res) =>{
    const newJob = new Job({
        company: req.body.company,
        role: req.body.role,
    })
    const savedJob = await newJob.save();
    res.json(savedJob);
})

router.post("/from-link", async (req, res) => {
    try {
      const { url } = req.body;
  
      // Extract text from URL
      const cleaned = url
        .split("/")
        .pop()
        .split("-")
        .slice(0, -1); // remove job ID
  
      const role = cleaned.slice(0, -2).join(" ");
      const company = cleaned.slice(-2).join(" ");
  
      const newJob = new Job({
        company: company || "Unknown Company",
        role: role || "Unknown Role",
        status: "Applied",
      });
  
      const saved = await newJob.save();
      res.json(saved);
  
    } catch (err) {
      console.log(err.message);
      res.status(500).json("Failed to parse job link");
    }
  });

router.put("/:id", async (req,res) =>{
    const updated = await Job.findByIdAndUpdate(
        req.params.id,
        {status: req.body.status},
        {new: true}
    );
    res.json(updated)
})

router.delete("/:id", async (req,res) => {
await Job.findByIdAndDelete(req.params.id);
res.json("Job Deleted")
})

module.exports= router;