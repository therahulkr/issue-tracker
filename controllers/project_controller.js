const Project = require('../models/project');
const Issue = require('../models/issue');
const mongoose = require('mongoose')

// request is created by admin for employee's
exports.display = async(req,res)=>{
    return res.render('create',{
        title : 'create a new project'
    })

}

exports.createProject = async(req,res)=>{
    await Project.create(req.body);
    return res.redirect('/project/new');
}

exports.projectDetails = async(req,res)=>{
    let project = await Project.findById(req.params.id);
    // let projects = await Project.find();

    let issues = await Issue.find();
    let issuearr = [];
    for(issue of issues){
        if(issue.ofproject.toString()===req.params.id.toString()){
            issuearr[issuearr.length] = issue;
        }
    }

     return res.render('profile',{
          title : "Details",
          project,
          issuearr
     });
}

exports.removeProject = async(req,res)=>{
    let projectIssues = await Issue.find();
    // console.log(req.params.id);
    await Project.findByIdAndDelete(req.params.id);
    // console.log(projectIssues);
    for(issue of projectIssues){
            if(issue.ofproject.toString()===req.params.id.toString()){
                await Issue.findByIdAndDelete(issue._id);
            }
    }

    
    return res.redirect('back');
}