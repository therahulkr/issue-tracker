const Issue = require('../models/issue')
const ApiFeatures = require('../config/api_features');
const Project = require('../models/project')
// rendering of home page

module.exports.createIssue = async(req,res)=>{
    let issue = req.body;
    
    await Issue.create({
        ...issue,
         ofproject : req.params.id
    });

    res.redirect('back');
}

module.exports.getSearchedIssues = async(req,res)=>{
    console.log(req.query);
    console.log(req.params);

    const apiFeatures = new ApiFeatures(Issue.find({ofproject:req.params.id}),req.query)
    .search();
    const result = await apiFeatures.query;

    console.log(result)

    return res.redirect('back')
}

module.exports.getfilteredresult = async(req,res)=>{
    let project = await Project.findById(req.params.id);
    let myIssues = await Issue.find({ofproject:req.params.id});
    let issuearr = [];
    console.log(typeof(req.query.label))
   
    if(typeof(req.query.label)==='string'){
        for(issue of myIssues){
            if(issue.label===req.query.label){console.log('hi')
                issuearr[issuearr.length] = issue;
            }
        }
    }
    else
    {for(label of req.query.label){
        for(issue of myIssues){
            if(issue.label===label){
                issuearr[issuearr.length] = issue;
            }
        }
    }}
    
    console.log(issuearr);
    return res.render('profile',{
        title : "Details",
        project,
        issuearr
   });
}