import { useEffect, useState } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .then(() => setLoading(false));
  }, []);
  

  return [posts, loading, error];
}
