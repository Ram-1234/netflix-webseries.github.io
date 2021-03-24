import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const Apps=()=>(
    
        <>
        <h1>List of top Netflix Series</h1>
        {Sdata.map((val)=>{
        return(
          <Card
        key={val.id}
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
        );
      })}
      </>
);

export default Apps;