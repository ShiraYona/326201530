import { useState ,useEffect} from "react";
// import {useLocation} from 'react-router-dom'

// import { Card, Image } from 'react-bootstrap';//

// import { View, Button } from "react-native";
import React from "react";

function Tvach(){

 const [data,setDate]=useState();

const [start,setStart]=useState();
const [end,setEnd]=useState();
const [checked,setChecked]=useState();

const a = () => {
    setChecked(!checked);

  };
       
          const t=()=>{
            
     fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
    .then(response => response.json())
                .then(result => {
                    setDate(result)
                console.log(data);})
                .catch(error => console.log('error', error));
                 }  
          
          

          useEffect(() => {
            t()
          }, [])
           
   
          
    return (
        <div>
          <input
            placeholder="start"
            // type="date"
            onBlur={(e) => setStart(e.target.value)}
          />
        
          <input
            placeholder="end"
            // type="date"
            onBlur={(e) => setEnd(e.target.value)}
          />
        <button onClick={() => t(start)}>הצג תאריכים</button> 
        <label>
                <input
          type="checkbox"
          checked={checked}
          onChange={a}
        />
        פרשת שבוע בלבד
      </label>

        <table>
 
      {data && data.map(item => {
        
          return (
            <div style={{border:'20px',mergin:'250px'}}>
          
            <tr key={item.title}>
              <td style={{fontFamily:outerHeight}}>{ item.title }</td>
              <br></br>
              <td>{ item.start }</td>
              <br></br>
              <td>{ item.allDay }</td>
              <br></br>
              <td>{ item.className.parasat }</td>
              <br></br>
              {/* <button onClick={()=>sendTsk(item.id)}></button> */}
            </tr>
            </div>
          );

      

        })}
    </table>

    {setChecked(checked)&&(
    <button onClick={()=> setDate(data.filter(s=>s.className===parasat))}></button>
    )}
        </div>
    )
     
       
   
}
export default Tvach