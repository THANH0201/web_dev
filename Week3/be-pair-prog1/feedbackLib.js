//if (require.main === module) {
 //let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
 //console.log(result);
 //console.log("getAll called:", getAll());
 //console.log("findById called:", findById(1));
 // rest of the tests here


let feedbacks = [];
let currentId = 1;

function addOne(data) {
  const feedback = {
    id: currentId++,
    name: data.name,
    comments: data.comments,
    rating: data.rating,
  };
  feedbacks.push(feedback);
  return feedback;
}
function getAll() {
  return feedbacks;
}

function findById(id) {
  return feedbacks.find((feedback) => feedback.id === Number(id));
}
function updateById(id, updatedFeedback) {
  const feedback = findById(id);
  if (feedback) {
    Object.assign(feedback, updatedFeedback);
    return feedback;
  }
  return null;
}
function deleteById(id) {
    const feedback = findById(id);
  if (feedback) {
    feedbacks = feedbacks.filter((fb) => fb.id !== Number(id));
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
