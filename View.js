import React, { useState, useEffect } from 'react'
import Show from './Show'

function View({datas,part}) {
     let[result,setresult]=useState({})
  return<>
  <div className='whole'>
     <div onClick={()=>{console.log(part[datas].question)}} style={{"cursor":"pointer","background":"blue" ,"margin":"2px"}}  className='no'>{datas+1}</div>
  
  </div>

  </>
}

export default View