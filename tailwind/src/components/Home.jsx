import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = (props) => {
    return (
        <>
            <Section1 User={props.User} />
            <Section2 />
        </>
    )
}
export default Home;