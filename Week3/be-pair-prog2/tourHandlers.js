const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    res.json({ tours: Tour.getAll() });
};

const createTour = (req, res) => {
    const newTour = Tour.addOne(req.body);
    res.status(201).json({ tour: newTour });
};

const getTourById = (req, res) => {
    const tour = Tour.findById(Number(req.params.tourId));
    if (tour) {
        res.json({ tour });
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const updateTour = (req, res) => {
    const updatedTour = Tour.updateById(Number(req.params.tourId), req.body);
    if (updatedTour) {
        res.json({ tour: updatedTour });
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const deleteTour = (req, res) => {
    const deleted = Tour.deleteById(Number(req.params.tourId));
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};