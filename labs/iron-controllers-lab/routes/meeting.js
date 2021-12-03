const express = require("express");
const router = express.Router();
const {
  getAllMeetings,
  createMeeting,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");
const { validateJwt } = require("../helpers/processJwt");

router.get("/", validateJwt, getAllMeetings);
router.get("/meeting/:id", validateJwt, getMeetingById);
router.post("/meeting", validateJwt, createMeeting);
router.put("/meeting/:id", validateJwt, updateMeeting);
router.delete("/meeting/:id", validateJwt, deleteMeeting);

module.exports = router;
