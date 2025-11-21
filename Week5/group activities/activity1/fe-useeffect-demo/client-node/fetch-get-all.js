
const apiUrl = 'http://localhost:3001/api/blogs';

const fetchBlogs = async () => {
    try{
        const response = await fetch(apiUrl)
        if(!response.ok) {
            throw new Error("Fail to get all");
        }
        const data = await response.json();
        console.log(data);
        return data;
}catch(error){
    console.error("Error getall blog:", error.message);
  }
}

fetchBlogs()
