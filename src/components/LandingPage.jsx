import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HabitContext } from "..";
import { habitData } from "../data/habitData";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { habits } = useContext(HabitContext);

  useEffect(() => {

  },[])

  const imageUrlFinder = (name) => {

    // console.log();
    return habitData.find(habit => habit.imageCategory === name).imageURL;
  }
  const imageIdFinder = (name) => {
    // console.log();
    return habitData.find(habit => habit.imageCategory === name).imageId;
  }
  
  return (
    <div>
      <h2>Habits</h2>
      
      <br/>
      <div onClick={()=>{navigate("/create")
      }}>
      <p>{habitData[0].imageCategory}</p>
      <img src={habitData[0].imageURL} width={100} height={200}></img></div><br/>
      {habits.map(habit => (
        <div onClick={() => {
          // imageIdFinder(habit.habitName)
          navigate(`/about/${imageIdFinder(habit.habitName)}`)
          }}>
            <p>{habit.habitName}</p>
            <img src={imageUrlFinder(habit.habitName)} width={100} height={200}></img>
          </div>
        ))}
    </div>
  );
};
