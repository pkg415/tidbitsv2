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

const CATEGORIES = [
  { name: "technology", color: "rgb(196, 242, 242)" },
  { name: "science", color: "#b4dfb4" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#da9fda" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
  { name: "words", color: "rgb(100, 200, 250"},
  { name: "poetry", color: "fffacd" }
];

console.log(CATEGORIES.find((cat) => cat.name === "science").color);
console.log("Hello whirled");

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.main-form');
const factsList = document.querySelector('.facts-list');

//create DOM elements; render facts in list
factsList.innerHTML = "";

// factsList.insertAdjacentHTML("afterbegin", "<li>Bear</li>");
// load data from Supabase
loadFacts();

async function loadFacts() {
const res = await fetch("https://pcqfdrqooxgohfqmopsk.supabase.co/rest/v1/info", {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcWZkcnFvb3hnb2hmcW1vcHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxNTA5NTUsImV4cCI6MjAwNTcyNjk1NX0.ZyZYBgq1QG4cGqvoKVr-C8KNgvIFT8L6mz_i7IJz710",
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcWZkcnFvb3hnb2hmcW1vcHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxNTA5NTUsImV4cCI6MjAwNTcyNjk1NX0.ZyZYBgq1QG4cGqvoKVr-C8KNgvIFT8L6mz_i7IJz710",
  },
}
);
const data = await res.json();
// const filteredData = data.filter((entry) => entry.category === "technology");
createFactsList(data);

};
function createFactsList(dataArray) {

const htmlArr = dataArray.map((fact) =>`<li class="info">
  <p>
  ${fact.text}
    <a
    class="source"
    href="${fact.source}"
    target="_blank"  
    >(Source)</a>
  </p>
  <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${fact.category}</span>
  </li>`
  );

// console.log(htmlArr);
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin", html);
};

// createFactsList(initialFacts);

// Toggle form visibility
// we will leave test data in html, and instead use JS to clear the data
// console.dir(btn) will display the whole directory of the element on DOM

btn.addEventListener('click', function() {
  console.log("CLICK");

  if(form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = "Close";
  } 
  else {
    form.classList.add('hidden');
    btn.textContent = "Share a TidBit";
  }
})

// ${ CATEGORIES.find((cat) => cat.name === fact.category).color }

// let votesInteresting = 23;
// let votesMindblowing = 23;
// let votesFalse = 77;
// const text = "Lisbon is the capital of Portugal";

// let totalUpvotes = votesInteresting + votesMindblowing;

// const strTemplateLiteral = `The current fact is ${text}. It is ${calcTidBitAge()} years old.  It is probably ${totalUpvotes > votesFalse ? "correct" : "false"
//   }.`

// const isCorrect = votesFalse < totalUpvotes;

// function calcTidBitAge(yearCreated) {
//   const currentYear = new Date().getFullYear();
//   if (yearCreated > currentYear) alert('no time Travel to future allowed!');
//   const age = currentYear - yearCreated;
//   return age;
// }

// // const message = 
// //   totalUpvotes > votesFalse 
// //   ? "ppl vote yes" 
// //   : "check more sources...";

//   // alert(message);

//   // const calcAge2 = (yearGiven) => new Date().getFullYear() - yearGiven;
// // const testAge = calcTidBitAge(2019); 
// // // console.log(testAge);

// // if (votesInteresting === votesMindblowing) {
// //   alert('This tidbit is equally interesting & mind-blowing!');
// // }




// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories)

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
//   {
//     id: 4,
//     text: "You do not have to be good.",
//     source: "https://www.vanderbilt.edu/olli/class-materials/2017Summer.MindfulnessWk1.pdf",
//     category: "poetry",
//     votesInteresting: 967,
//     votesMindblowing: 666,
//     votesFalse: 0,
//     createdIn: 2004,
//   },
//   {
//     id: 5,
//     text: "Kubernetes is an open source orchestration software that allows you to run Docker containers & workloads.",
//     source: "https://azure.microsoft.com/en-us/solutions/kubernetes-vs-docker/",
//     category: "technology",
//     votesInteresting: 17,
//     votesMindblowing: 0,
//     votesFalse: 0,
//     createdIn: 2023,
//   }
// ];

// const factAges = initialFacts.map((el) => calcTidBitAge(el.createdIn));

