// DOM manipulation
const app = document.getElementById("app");

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
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
