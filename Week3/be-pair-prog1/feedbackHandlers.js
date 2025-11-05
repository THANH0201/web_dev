const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    res.json({ feedbacks: Feedback.getAll() });
};

const createFeedback = (req, res) => {
    const newFeedback = Feedback.addOne(req.body);
    res.status(201).json({ feedback: newFeedback });
};

const getFeedbackById = (req, res) => {
    const feedback = Feedback.findById(Number(req.params.feedbackId));
    if (feedback) {
        res.json({ feedback });
    } else {
        res.status(404).json({ message: "Feedback not found" });
    }
};

const updateFeedback = (req, res) => {
    const feedback = Feedback.findById(Number(req.params.feedbackId));
    if (feedback) {
        const { name, comments, rating } = req.body;
        const updatedFeedback = Feedback.updateById(feedback.id, req.body);
        res.json({ feedback: updatedFeedback });
    } else {
        res.status(404).json({ message: "Feedback not found" });
    }
};

const deleteFeedback = (req, res) => {
    res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};