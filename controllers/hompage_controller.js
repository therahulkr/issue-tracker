const Project = require('../models/project');

module.exports.homepage = async(req,res)=>{
    let projects = await Project.find();

    return res.render('home',{
        title:'Issue Tracker',
        allprojects : projects
    })
}