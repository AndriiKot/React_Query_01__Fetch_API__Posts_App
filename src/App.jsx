import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";

function App() {
  const [posts, loading, error] = FetchPosts();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (posts.length == 0) {
    return <p>No posts found.</p>;
  }

  return <CardsList list={posts} />;
}

export default App;
