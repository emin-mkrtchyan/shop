



export function Search({searchFunc}){


    return <form className=" text-center">
        <input 
            type="text" 
            placeholder="Search Here..." 
            className=" w-[80%] outline-0 border-b-4 border-orange-300 p-4 text-2xl text-orange-500 " 
            onChange={(e) => searchFunc(e.target.value)} />
    </form>
}