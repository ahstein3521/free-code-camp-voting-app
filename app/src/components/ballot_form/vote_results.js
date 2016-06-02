import React, { Component } from 'react';
import {BarChart} from 'react-d3';



  const Chart= (props)=>{

    const values=props.ballot.options.map((v,i)=>{return {x:v.name,y:v.votes}})
    const data=[{name:'Vote Results', values:values}];  
    return(         
          <BarChart
            data={data}
            width={700}
            height={300}
            title={props.ballot.title}
            yAxisLabel='Votes'
            fill={'#3132bd'}/>
          
      
    )        
  
 } 
export default Chart
