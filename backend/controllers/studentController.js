const Student =
require("../models/studentModel");

exports.getStudents =
(req,res)=>{

Student.getAllStudents(
(err,result)=>{

if(err){

return res.status(500)
.json(err);

}

res.json(result);

});
};

exports.getStudent =
(req,res)=>{

Student.getStudentById(
req.params.id,

(err,result)=>{

if(err){

return res.status(500)
.json(err);

}

res.json(result);

});
};

exports.createStudent =
(req,res)=>{

Student.createStudent(
req.body,

(err,result)=>{

if(err){

return res.status(500)
.json(err);

}

res.status(201)
.json({
message:
"Student Added"
});

});
};

exports.updateStudent =
(req,res)=>{

Student.updateStudent(

req.params.id,

req.body,

(err,result)=>{

if(err){

return res.status(500)
.json(err);

}

res.json({
message:
"Student Updated"
});

});
};

exports.deleteStudent =
(req,res)=>{

Student.deleteStudent(

req.params.id,

(err,result)=>{

if(err){

return res.status(500)
.json(err);

}

res.json({
message:
"Student Deleted"
});

});
};