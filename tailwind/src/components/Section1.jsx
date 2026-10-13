import Section1Left from "./Section1Left";
const Section1 = (props) => {
    return (
        <>
            <div className="w-full flex gap-4 flex-nowrap shrink-0 h-screen bg-gray-800">
                {props.User.map((elem, idx) => {
                    return (
                        <Section1Left key={idx} Name={elem.Name} Salary={elem.Salary} Id={idx} />
                    )
                })}
            </div>
        </>
    )
}
export default Section1;