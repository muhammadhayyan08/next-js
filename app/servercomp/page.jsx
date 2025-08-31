
const URL = "https://jsonplaceholder.typicode.com/posts";

const ServerComp = async ()=>{
   const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        return(
          <>
          <h1>ServerComp</h1>
          <ul className="grid grid-cols-3 gap-5">
        {data.map((curElem) => (
          <li
            key={curElem.id}
            className="p-3 border rounded shadow-sm "
          >
            {curElem.body}
          </li>
        ))}
      </ul>
          </>
        )
}
export default ServerComp;