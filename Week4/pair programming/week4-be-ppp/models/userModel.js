// Updated data model
/*
{
  "name": "Adventures in Tokyo - 5 Day Tour",
  "info": "Discover the vibrant mix of tradition and modernity in Tokyo. Visit ancient temples like Senso-ji, explore futuristic districts such as Shibuya and Akihabara, and enjoy authentic Japanese cuisine from sushi to ramen. Guided tours will take you through bustling markets, serene gardens, and hidden alleyways filled with local charm.",
  "image": "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
  "price": "1,450",
  "duration": "5 days",
  "groupSize": "Max 12 people",
  "rating": 4.8,
  "availability": true
}
*/

let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || membership_status === undefined ) {
    return false;
  }
  const newUser = {
    id: nextId++,
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
    
  };
  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  return user || false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) tour.name = updatedData.name;
    if (updatedData.email) user.email = updatedData.email;
    if (updatedData.password) user.password = updatedData.password;
    if (updatedData.priphone_number) user.priphone_number = updatedData.priphone_number;
    if (updatedData.gender) user.gender = updatedData.gender;
    if (updatedData.date_of_birth) user.date_of_birth = updatedData.date_of_birth;
    if (updatedData.membership_status !== undefined) user.membership_status = updatedData.membership_status;
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength;
  }
  return false;
};

if (require.main === module) {
  let result = addOne(
        "Matti Seppänen",
        "matti@example.com",
        "M@45mtg$",
        "+358401234567",
        "Male",
        "2000-01-15",
        "Active"
  );
  console.log(result);

  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
    "updateById called:",
    updateOneById(2, {
    name: "Mark Seppo",
    email: "mark@example.com",
    password: "z@34mtg$",
    phone_number: "+358454734567",
    gender: "Male",
    date_of_birth: "2005-11-25",
    membership_status: "Active"
    })
  );
  console.log("findById called after item updated:", findById(2));
  console.log("deleteById called:", deleteOneById(2));
  console.log("findById called after item deleted:", findById(2));
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
