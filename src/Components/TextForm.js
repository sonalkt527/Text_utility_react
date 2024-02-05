import React, {useState} from 'react'





export default function 
(props) {
    const [text, setCount]= useState("enter the text");
    const [isColored, setIsColored] = useState(false);

   
    const onHandle=()=>{
        let newtext=text.toUpperCase()
    
        setCount(newtext);
    }
    const onHandle2=()=>{
        let newtext=text.toLowerCase()
        setCount(newtext);
    }
    const onchange2=(event)=>{
        setCount(event.target.value);
    }
    
  return (
    
    <div>
        <h1>{props.heading}</h1>
    <div className="form-group">
  <textarea className="form-control"  value={text} onChange={onchange2}id="exampleFormControlTextarea1" rows="8"></textarea>
  
    </div>
    <button className='btn btn-primary' onClick={onHandle} > click to capitalize
    </button>
    <button className='btn btn-danger' onClick={onHandle2} > click to lowercase
    </button>
    
    </div>
  )
}
