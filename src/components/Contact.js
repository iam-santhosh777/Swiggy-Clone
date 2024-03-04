const Contact = () => {
    return(
        <div className="flex flex-col items-center gap-5 justify-center m-auto my-4 text-center w-9/12">
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <form className="flex flex-col justify-center items-center gap-10 w-6/12">
                <input className="border-black border w-7/12 p-2" type="text" placeholder="Name"></input>
                <input className="border-black border w-7/12 p-2" type="text" placeholder="Email"></input>
                <input className="border-black border h-32 w-7/12 p-2" type="textArea" placeholder="Convey Message to US..."></input>
                <button className="bg-black text-white w-3/12 p-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;