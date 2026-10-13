const App = () => {
  function MouseCalculator(elem) {
    if(elem>0) {
      console.log("Scrolling Up...")
    } else {
      console.log("Scrolling down...")
    }
  }
  return (
    <>
    <div className="body" onWheel={function(elem){
      MouseCalculator(elem.deltaY)
    }}>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
      <button onMouseMove={(elem)=> {
        console.log(elem)
      }}>Click</button>
    </>
  )
}
export default App;