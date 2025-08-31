'use client'
import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function Client() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setPostData(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData(); //
  }, []);

  return (
    <div className="p-6">
      <button
        onClick={() => alert("hii")}
        className="bg-amber-400 p-3 rounded-md mb-4"
      >
        Click me
      </button>

      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem) => (
          <li
            key={curElem.id}
            className="p-3 border rounded shadow-sm "
          >
            {curElem.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
