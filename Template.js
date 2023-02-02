import React, { useState, useEffect } from 'react'
import Show from './Show';
import View from './View'

function Template() {
 const [answer, setanswer] = useState([]);
     useEffect(() => {
    loadData();
  }, []);
 
   
  let loadData = async () => {
    try {
    await fetch("http://localhost:4010/api/add/63db7fbf80b9df831998e476")
        .then((data) => data.json())
        .then((answ) =>setanswer(answ.task));
  } catch (error) {
console.log(error);
 } }; 
   
  return <>
  <div> {answer.map((answ,index) => (
           <View key={answ._id} datas={index}  data={answ.task} id={answ._id} part={answer} parts={setanswer} />
        ))}</div>
<Show/>
  </>
}

export default Template