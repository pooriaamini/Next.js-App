let hello ='hello world'

interface User{
    name:string,
    id:number
}

const user:User ={
    name:'ali',
    id:0
}



interface Point{
    x:number,
    y:number
}


function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }

  const point = { x: 12, y: 26 };
logPoint(point);