import React from 'react';
import './App.css'
import boxData from './boxes'
import Box from './Components/Box';


//* those are just box practice to 
//* ensure my code working
// export default function App(){

//   const [boxes,setBoxes]=React.useState(boxData)
//   console.log(boxes)

//   function toggle(id){
//     setBoxes(prevİtem=>{
//       return prevİtem.map((item)=>{
//         return item.id === id ? {...item, on: !item.on}: item;
//       })
//     })
//   }

//   const box=boxes.map(item=>{
//     return (
//       <Box 
//         id={item.id}
//         on={item.on}
//         click={() => toggle(item.id)}
//       />
//     )
//   })

//   return(
//     <div className='main-box'>
//       {box}
//     </div>
//   )
// }

import Car from './Components/Car';
import carslar from './cars.js'

function App() {

//! change isSelected property via json file

//* ı wanna show selected cars top of the page 
//* ı cant figura out


const [carsData,setCarsData]=React.useState(carslar)
// const [yourTeam,setYourTeam]=React.useState()

const yourTeam=[]



  function select(id){

    setCarsData(prevCarsData=>{
      return prevCarsData.map((item)=>{
        return item.id === id 
          ?{...item,isSelected:!item.isSelected}
          :item
      })
    })

    const sİtem=carsData.filter(item=>item.id===id).map(item=>{
      return <h1>{item}</h1>
    })

    yourTeam.push(sİtem)

    console.log(yourTeam)
    

   
  }


  const cars = carsData.map(item=>{
    return (
      <Car 
        price={item.price}
        year={item.year}
        image={item.img}
        click={()=>select(item.id)}
        selected={item.isSelected}

      />
      )
  })

  return (
    <div className="App">
      {yourTeam}
      <h1>RALLY - TEAM </h1>
      <h2>selected cars : img came here</h2>
      
      {cars}
      </div>
  );
}

export default App;
