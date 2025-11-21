const apiUrl = "http://localhost:3001/api/blogs";
const blog = {
  title: "Good morning 2024-11-18",
  body: "here is the body",
  author: "Sami",
};
const addBlog = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to add a new blog");
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
      console.error("Error adding blog:", error.message);
  }
};
// Usage
addBlog();
