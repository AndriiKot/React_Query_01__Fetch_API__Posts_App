const fetchPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return data;
};

export default fetchPosts;
