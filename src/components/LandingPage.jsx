import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HabitContext } from "..";
import { habitTypesData } from "../data/habitData";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { activeHabits,habitTypeImageGetter } = useContext(HabitContext);
  
  return (
    <div>
      <h2>Habit Tracker</h2>
      
      <br/>
      <div onClick={()=>{navigate("/create")
      }}>
        <img src={habitTypesData[0].habitTypeImage} style={{
          cursor: "pointer"}} width={250} height={350}></img>
      </div><br />
      <div onClick={()=>{navigate("/archived")
      }}>
        <img src={habitTypesData[6].habitTypeImage} style={{
          cursor: "pointer"}} width={250} height={350}></img>
      </div><br />
      <h3>{activeHabits.length >0? "Here are your habits so far":"You have no habits so far. It is time to make some!" }</h3>
      {activeHabits.map(habit => (
        <div style={{cursor:"pointer"}} onClick={() => {

          navigate(`/about/${habit.habitId}`)
          }}>
            <p>{habit.habitName}</p>
            <img  src={habitTypeImageGetter(habit.habitTypeImage)}width={250} height={350}></img>
          </div>
        ))}
    </div>
  );
};
