///if (require.main === module) {
///let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
// console.log(result);
// console.log("getAll called:", getAll());
// console.log("findById called:", findById(1));
 // rest of the tests here
//}
 // rest of the tests here


let tours = [];
let currentId = 1;

function addOne(data) {
  const tour = {
    id: currentId++,
    name: data.name,
    url: data.url,
    price: data.price,
  };
  tours.push(tour);
  return tour;
}
function getAll() {
  return tours;
}

function findById(id) {
  return tours.find((tour) => tour.id === Number(id));
}
function updateById(id, update) {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, update);
    return tour;
  }
  return null;
}
function deleteById(id) {
    const tour = findById(id);
  if (tour) {
    tours = tours.filter((t) => t.id !== id);
    return true;
  }
  return false;
}
module.exports = {
  addOne,
  getAll,
  findById,
  updateById,
  deleteById,
};  
