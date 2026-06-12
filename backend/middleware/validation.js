module.exports =
(req,res,next)=>{

const {
name,
email,
course,
semester
}
=
req.body;

if(
!name ||
!email ||
!course ||
!semester
){

return res.status(400)
.json({
message:
"All fields required"
});
}

next();
};