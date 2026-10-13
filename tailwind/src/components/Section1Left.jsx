const Section1Left = (props) => {
    return (
        <>
            <div className="w-1/4 h-screen bg-amber-300">
                <h1>{props.Name}</h1>
                <h2>{props.Salary}</h2>
                <h3>{props.Id}</h3>
            </div>
        </>
    )
}
export default Section1Left;