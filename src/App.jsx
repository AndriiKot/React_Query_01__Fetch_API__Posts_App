import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isPending, isError, data: posts, error } = useQuery({
    queryKey: ["posts"],
    queryFn: FetchPosts,
  });
  if (isPending) {
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
