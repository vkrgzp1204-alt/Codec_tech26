const db = require("../config/db");

exports.getAllStudents = (callback) => {

    db.query(
        "SELECT * FROM students",
        callback
    );
};

exports.getStudentById =
(id, callback) => {

    db.query(
        "SELECT * FROM students WHERE id=?",
        [id],
        callback
    );
};

exports.createStudent =
(data, callback) => {

    db.query(
        `INSERT INTO students
        (name,email,course,semester)
        VALUES(?,?,?,?)`,

        [
            data.name,
            data.email,
            data.course,
            data.semester
        ],

        callback
    );
};

exports.updateStudent =
(id,data,callback)=>{

db.query(
`UPDATE students
SET name=?,email=?,course=?,semester=?
WHERE id=?`,

[
data.name,
data.email,
data.course,
data.semester,
id
],

callback
);
};

exports.deleteStudent =
(id,callback)=>{

db.query(
"DELETE FROM students WHERE id=?",
[id],
callback
);
};