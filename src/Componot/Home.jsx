import React, { useEffect, useState } from "react"
import Task from "./Task"

const intialarr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks"))
: [];

function Home() {
  const [tasks, settask] = useState(intialarr);
  const [title, settitle] = useState("");
  const [dicription, setdecription] = useState("");
   
  const sumbithandler = (e) => {
    e.preventDefault();
    settask([...tasks,{title,dicription}]);
    settitle("");
    setdecription("");
    
  }

  const delettask=(index)=>{
    const filteredarr= tasks.filter((val,i)=>{
     return i!==index
    })
    console.log(filteredarr);
    settask(filteredarr);
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
  }, [tasks])
  

  return (
    <div className="container">
      <h1>DAILY GOAL</h1>
      <form onSubmit={sumbithandler} >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)
          } />

        <textarea 
         placeholder="Decription"
          value={dicription}
          onChange={(e) => setdecription(e.target.value)}  >
        </textarea>

        <button type="submit" onClick={delettask}>ADD</button>
      </form>
      {
        tasks.map((item, index) =>
          <Task key={index} 
          title={item.title} 
          dicription={item.dicription}
          delettask={delettask}
          index={index} />)
      }
    </div>

  )
}

export default Home