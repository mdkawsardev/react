import Home from "./components/Home"

const App = () => {
  const List = [
    {Name: "Imran", Salary: 90},
    {Name: "Kawsar", Salary:150},
    {Name: "Robin", Salary:150},
    {Name: "Jamshed", Salary:150},
  ]
  return (
      <>
        <Home User={List} />
      </>
  )
}
export default App;