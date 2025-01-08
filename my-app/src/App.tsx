import './App.css'
import data from '../data.ts'
import Header from './Header.tsx'
import Entry from './Entry.tsx'

function App() {
  
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}

        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // map={entry.googleMapsLink}
        // date={entry.dates}
        // description={entry.text}

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
  )
}

export default App
