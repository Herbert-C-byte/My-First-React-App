/* import MainContent from './components/MainContent.jsx' */
import Header from "./header.jsx";
import Entry from "./components/Entry.jsx";
import dataTravel from "./dataTravel.js"

function App() {
  
  const entryElements = dataTravel.map((entry) => {
    return (
      <Entry
        key={entry.id} 
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
}

export default App;
