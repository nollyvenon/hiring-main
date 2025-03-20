const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");
const {fetchAllClassTeachers} = require("../class-teacher/class-teacher-service");
const {updateClassDetail} = require("../classes/classes-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents.find();
    res.json({ students });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const detail = await getStudentDetail(id);
    res.json(detail);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { name, email, rollNumber } = req.body;
    const message = await addNewStudent({ name, email, rollNumber });
    res.json(message);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const payload = { id, status };

    const message = await setStudentStatus(payload);
    res.json({ message });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, rollNumber } = req.body;
    const message = await updateStudent({ name, email, rollNumber, id });
    res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
