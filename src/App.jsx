import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";
import { useQuery } from "react-query";

function App() {
  const { data: posts, loading, error } = useQuery("posts", FetchPosts);
  console.log(posts);
  // const data = useQuery("posts", fetchPosts);
  // console.log(data);
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // if (posts.length == 0) {
  //   return <p>No posts found.</p>;
  // }

  // return <CardsList list={posts} />;
}

export default App;
