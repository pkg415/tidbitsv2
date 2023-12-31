import "./style.css";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
  { name: "poetry", color: "ef6666"}
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 4,
    text: "You do not have to be good.",
    source: "https://www.vanderbilt.edu/olli/class-materials/2017Summer.MindfulnessWk1.pdf",
    category: "poetry",
    votesInteresting: 967,
    votesMindblowing: 666,
    votesFalse: 0,
    createdIn: 2004,
  },
  {
    id: 5,
    text: "Kubernetes is an open source orchestration software that allows you to run Docker containers & workloads.",
    source: "https://azure.microsoft.com/en-us/solutions/kubernetes-vs-docker/",
    category: "technology",
    votesInteresting: 17,
    votesMindblowing: 0,
    votesFalse: 0,
    createdIn: 2023,
  }
];


function App() {
  const appTitle = "Tidbits of Knowledge: Hello Chief Inspector";

  return (
    <>
   {/* HEADER */}
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="113" width="113" alt="butterflies logo" />
        <h1>{appTitle}</h1>
      </div>
      <button className="btn btn-large btn-open">Share a tidbit</button>
    </header>

    <NewFactForm />

     <main className="main">
    <CategoryFilter />
    <FactList />

    </main>
    </>
  );
}

function NewFactForm() {
  return <form className="facts-list">Fact Form</form>
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  // TEMPORARY using fake data as placeholder
  const facts = initialFacts;

  return ( 
  <section>
    <ul className="facts-list">
    {facts.map((fact) => (
       <li key={fact.id} className="info">
        <p>
         {fact.text}
          <a className="source" 
          href={fact.source}
            target="_blank" rel="noreferrer"
            >
              (source)
              </a>
        </p>
      
        <span className="tag" style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color,
         }}
         >
          {fact.category}
        </span>
         <div className="vote-buttons">
           <button>👍 {fact.votesInteresting}</button>
           <button>🤯 {fact.votesMindblowing}</button>
           <button>👎 {fact.votesFalse}</button>
         </div>
       
      </li>
    ))}
  </ul>
  </section>
  );
}

export default App;