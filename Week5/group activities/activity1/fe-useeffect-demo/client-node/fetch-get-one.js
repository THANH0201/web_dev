const apiUrl = "http://localhost:3001/api/blogs";
let id = "68c6ce5db8335fcf4d34312a";

const fetchBlog = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog. Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`${apiUrl}/${id}`);
    console.log("Single Blog:", data);
    return data;
  } catch (error) {
   console.error("Error fetching a blog:", error.message); 
  }
};

fetchBlog(id);
