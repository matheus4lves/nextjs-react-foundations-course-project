// This is the main page of your app.

// External dependencies
import LikeButton from "./like-button";

// Functionality definition
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      {/* Nesting the Header component */}
      <Header title="React" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}

export default HomePage;
