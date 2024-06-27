import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";
import { useQuery } from "react-query";

function App() {
  const { data: posts, isLoading, isError } = useQuery("posts", FetchPosts);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (posts.length == 0) {
    return <p>No posts found.</p>;
  }

  return <CardsList list={posts} />;
}

export default App;
