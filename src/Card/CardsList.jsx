import Card from "./Card";
import Loading from "../Loading/Loading";

export default function CardsList(props) {
  const { list } = props;
  if (!list) {
    return <Loading />;
  }

  return (
    <div className="cards-container">
      {list.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
