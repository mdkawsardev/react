const Card = (props) => {
    return (
        <>
            <div className="Card">
                <h1>Name:{props.name}</h1>
                <p>Age:{props.age}</p>
                <p>Profession:{props.prof}</p>
                <p>Nationality:{props.nation}</p>
            </div>
        </>
    )
}
export default Card;