import Card from "./components/card"

const App = () => {
  const people = [
    {
      name: "John",
      age: 25,
      profession: "Web Developer",
      nationality: "American"
    },
    {
      name: "Rahim",
      age: 28,
      profession: "Teacher",
      nationality: "Bangladeshi"
    },
    {
      name: "Sarah",
      age: 24,
      profession: "Doctor",
      nationality: "British"
    },
    {
      name: "Tanaka",
      age: 30,
      profession: "Software Engineer",
      nationality: "Japanese"
    },
    {
      name: "Ali",
      age: 27,
      profession: "Businessman",
      nationality: "Pakistani"
    },
    {
      name: "Priya",
      age: 23,
      profession: "Graphic Designer",
      nationality: "Indian"
    },
    {
      name: "David",
      age: 35,
      profession: "Accountant",
      nationality: "Canadian"
    },
    {
      name: "Maria",
      age: 29,
      profession: "Nurse",
      nationality: "Filipino"
    },
    {
      name: "Ahmed",
      age: 32,
      profession: "Journalist",
      nationality: "Egyptian"
    },
    {
      name: "Emma",
      age: 26,
      profession: "Marketing Manager",
      nationality: "Australian"
    }
  ];

  return (
    <div className="parent">
      {people.map((elem, index)=> {
        return (
          <div key={index} className="box">
            <Card name={elem.name} age={elem.age} prof={elem.profession} nation={elem.nationality} />
          </div>
        )
      })}
    </div>
  );
};

export default App;