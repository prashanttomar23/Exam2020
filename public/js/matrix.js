function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...

  elements = {
    nodes,
    edges
  };
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      let obj={
          id:`N${i}-${j}`
      }
      let content={
        data:obj
      }
      nodes.push(content);
    }
  }
  ////////------edge to east---
for(let i=0;i<3;i++){
  for(let j=0;j<3-1;j++){
      let obj1={
          id:`${i}-${j}E`,
          source:`N${i}-${j}`,
          target:`N${i}-${j+1}`
      };
      let content={
          data:obj1
      }
      edges.push(content);
      let obj2={
        id:`${i}-${j+1}W`,
        source:`N${i}-${j+1}`,
        target:`N${i}-${j}`
      };
      let content2={
        data:obj2
      }
    edges.push(content2);
  }
}

//------------edge to south----------
for(let j=0;j<3;j++){
  for(let i=0;i<3-1;i++){
      let obj1={
          id:`${i}-${j}S`,
          source:`N${i}-${j}`,
          target:`N${i+1}-${j}`
      };
      let content={
          data:obj1
      }
      edges.push(content);

      let obj2={
        id:`${i+1}-${j}N`,
        source:`N${i+1}-${j}`,
        target:`N${i}-${j}`
      };
      let content2={
        data:obj2
      }
      edges.push(content2);
      
  }
}
for(let i=0;i<3-1;i++){
  for(let j=0;j<3-1;j++){
    let objSE={
      id:`${i}-${j}SE`,
      source:`N${i}-${j}`,
      target:`N${i+1}-${j+1}`
    }
    let content={
      data:objSE
    }
    edges.push(content);
  }
}
for(let i=1;i<3;i++){
  for(let j=0;j<3-1;j++){
    let objNE={
      id:`${i}-${j}NE`,
      source:`N${i}-${j}`,
      target:`N${i-1}-${j+1}`
    }
    let content={
      data:objNE
    }
    edges.push(content);



  }
}
  return elements;

}
module.exports.mapdata = mapdata;


