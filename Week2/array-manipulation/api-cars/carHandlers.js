const Car = require("./carLib");

const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
}; 

//create a new car
const createCar = (req, res) => {
  const { model, color, age } = req.body;

  const newCar = Car.addOne(model, color, age);

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(500).json({ message: "Failed to create car" });
  }
};
//get a car by id
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
};
//update a car by id
const updateCar = (req, res) => {
  const carId = req.params.carId;

  const { model, color, age } = req.body;

  const updatedCar = Car.updateOneById(carId, { model, color, age });

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};
//delete a car by id
const deleteCar = (req, res) => {
  const carId = req.params.carId;

  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};
//export all car handlers
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};