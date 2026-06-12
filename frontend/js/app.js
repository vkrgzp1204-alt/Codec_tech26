const API =
"http://localhost:5000/api/students";

let students = [];

const table =
document.getElementById(
"studentTable"
);

async function loadStudents(){

const res =
await fetch(API);

students =
await res.json();

renderStudents(students);
}

function renderStudents(data){

table.innerHTML =
data.map(student =>

`
<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.email}</td>

<td>${student.course}</td>

<td>${student.semester}</td>

<td>

<button
class="edit"
onclick="editStudent(
${student.id},
'${student.name}',
'${student.email}',
'${student.course}',
${student.semester}
)">

Edit

</button>

<button
class="delete"
onclick=
"deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>
`

).join("");
}

document
.getElementById("studentForm")
.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const id =
document.getElementById(
"studentId"
).value;

const student = {

name:
document.getElementById(
"name"
).value,

email:
document.getElementById(
"email"
).value,

course:
document.getElementById(
"course"
).value,

semester:
document.getElementById(
"semester"
).value

};

if(id){

await fetch(
`${API}/${id}`,
{
method:"PUT",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(student)
}
);

}else{

await fetch(
API,
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(student)
}
);
}

document
.getElementById(
"studentForm"
).reset();

document
.getElementById(
"studentId"
).value="";

loadStudents();
}
);

function editStudent(
id,
name,
email,
course,
semester
){

document.getElementById(
"studentId"
).value=id;

document.getElementById(
"name"
).value=name;

document.getElementById(
"email"
).value=email;

document.getElementById(
"course"
).value=course;

document.getElementById(
"semester"
).value=semester;
}

async function deleteStudent(id){

await fetch(
`${API}/${id}`,
{
method:"DELETE"
}
);

loadStudents();
}

document
.getElementById("search")
.addEventListener(
"input",
(e)=>{

const value =
e.target.value
.toLowerCase();

const filtered =
students.filter(student =>

student.name
.toLowerCase()
.includes(value)
);

renderStudents(filtered);
}
);

document
.getElementById("sortBtn")
.addEventListener(
"click",
()=>{

const sorted =
[...students]
.sort((a,b)=>

a.name.localeCompare(
b.name
)
);

renderStudents(sorted);
}
);

loadStudents();