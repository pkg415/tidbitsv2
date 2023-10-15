import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="113" width="113" alt="butterflies logo" />
        <h1>Hello Chief Inspector</h1>
      </div>
      <button className="btn btn-large btn-open">Share a tidbit</button>
    </header>
  );
}

export default App;