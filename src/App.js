import React,{useState} from "react";
import "./App.css";

const App=()=>{
  const [arrayValue,setArrayValue]=useState([]);
  const [selected,setSelected]=useState("");
  const handlePush=()=>{
    if(selected===''){
      return;
    }
    const tempArr=[...arrayValue];
    tempArr.push(tempArr.length+1);
    setArrayValue(tempArr);
  }
  const handlePop=()=>{
    const tempArr=[...arrayValue];
    if(selected==='stack'){
      tempArr.splice(tempArr.length-1,1);
      setArrayValue(tempArr);
    }
    if(selected==='queue'){
      tempArr.splice(0,1);
      setArrayValue(tempArr);
    }
  }

  return(
    <div className="wrapper-stackqueue">
      <div className="wrapper-container">
        <div className="left-container">
          <h2 className="heading-stackqueue">SELECT MODE</h2>

          <div className="mode-container">
            <div className="mode" style={{backgroundColor: selected==="stack" && "white", color: selected==="stack" && "black",}} onClick={()=>setSelected("stack")}>STACK</div>
            <div className="or">OR</div>
            <div className="mode" style={{backgroundColor: selected==="queue" && "white", color: selected==="queue" && "black",}} onClick={()=>setSelected("queue")}>QUEUE</div>
          </div>
          
          <h2 className="heading-stackqueue">SELECT OPERATION</h2>
          <div className="pushpop-container">
            <div className="mode" onClick={handlePush}>PUSH</div>
            <div className="or">OR</div>
            <div className="mode" onClick={handlePop}>POP</div>
          </div>

          <div className="stackqueue-container">
            {arrayValue.map((val)=>{
              return <div className="stackqueue-value">{val}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;