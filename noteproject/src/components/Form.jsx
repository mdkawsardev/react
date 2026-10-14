const Form = (props) => {
    return (
        <>
            <div className=" flex justify-evenly bg-blue-500 py-10">
                <h2>{props.msg}</h2>
                <form onSubmit={props.formhandle} className="w-1/4 flex flex-col h-screen gap-6">
                    <input onChange={(e) => {props.setTitle(e.target.value)}} value={props.title} type="text" placeholder="Subject" className="py-4 px-8 text-xl border-2 border-gray-700 outline-0 rounded text-white" />
                    <textarea onChange={(e) => {props.setDetails(e.target.value)}} value={props.details} placeholder="Write something" className="py-4 h-full border-2 border-gray-700 outline-0 rounded text-white text-xl px-8"></textarea>
                    <button className="font-bold cursor-pointer py-4 px-8 text-xl bg-yellow-400 rounded">Submit</button>
                </form>
                <div className="noteBox flex flex-wrap gap-10 bg-black w-2/4 p-10">
                    {props.Post.map((elem, idx)=> {
                        return(
                            <div key={idx} className="singleBox w-60 h-80 bg-amber-50 p-8 rounded flex flex-col justify-between ">
                                <div className="texts">
                                    <h3 className="font-bold text-2xl">{elem.title}</h3>
                                    <p>{elem.details}</p>
                                </div>
                                    <button onClick={()=>{props.Delete(idx)}} className="py-4 w-full bg-red-500 font-bold outline-0 rounded cursor-pointer">Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Form