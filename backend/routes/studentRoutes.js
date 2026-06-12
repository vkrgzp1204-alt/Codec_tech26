const router =
require("express").Router();

const validation =
require("../middleware/validation");

const {

getStudents,

getStudent,

createStudent,

updateStudent,

deleteStudent

}
=
require("../controllers/studentController");

router.get(
"/",
getStudents
);

router.get(
"/:id",
getStudent
);

router.post(
"/",
validation,
createStudent
);

router.put(
"/:id",
validation,
updateStudent
);

router.delete(
"/:id",
deleteStudent
);

module.exports =
router;