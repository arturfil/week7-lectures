const Meeting = require("../models/Meeting")

const getAllMeetings = async (req, res) => {
    const meetings = await Meeting.find().populate("users");
    try {
        return res.status(200).json(meetings);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the meetings"})
    }
}

const getMeetingById = async (req, res) => {
    const { id } = req.params;
    const meeting = await Meeting.findById(id).populate("users");
    try {
        return res.status(200).json(meeting);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the meeting"});
    }
}

const createMeeting = async (req, res) => {
    const meetingToCreate = await Meeting.create(req.body);
    try {
        return res.status(201).json(meetingToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create meeting"});
    }
}

const updateMeeting = async (req, res) => {
    const { id } = req.params
    const meetingToUpdate = await Meeting.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(meetingToUpdate)
    } catch (error) {
        return res.status(500).json({message: "Couldn't update meeting"})   
    }
}

const deleteMeeting = async (req, res) => {
    const { id } = req.params;
    await Meeting.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Successfuly Deleted"});
    } catch (error) {
        return res.status(500).json({message: "Couldn't delete Meeting"});
    } 
}

module.exports = {
    getAllMeetings,
    getMeetingById,
    createMeeting,
    updateMeeting,
    deleteMeeting
}