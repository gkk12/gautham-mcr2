import { useEffect, useContext, useState } from "react";
import { habitTypesData} from "../data/habitData"
import { useNavigate, useParams } from "react-router-dom";

import {HabitContext} from ".."

export const AboutHabit = () => {
  const { habitId } = useParams();
  const { habits,deleteHabitHandler,archiveHabitHandler,archivedHabits  } = useContext(HabitContext);
  const [currentHabit, setCurrentHabit] = useState({})

  const navigate = useNavigate();
  const habitTypeImageGetter = (name) => {

    console.log(name);
    return habitTypesData.find(habit => habit.habitCategory === name).habitTypeImage;
  }
  useEffect(() => {
    setCurrentHabit(habits.find(habit => habit.habitId === habitId));
  },[])

  const editHabitHandler = (habit) => {
    navigate(`/edit/${habit.habitId}`);
  }
  return <div>
    <h2>{currentHabit.habitName}</h2>
    <img src={habitTypeImageGetter(currentHabit.habitTypeImage)} width={250} height={350}></img>
    <p>Repeated {currentHabit.habitGoal} {currentHabit.habitRepeat} during {currentHabit.habitTimeOfDay} starting {currentHabit.habitStartDate}</p>
    <button style={{
      display: archivedHabits.find(habit => habit.habitId === currentHabit.habitId) === undefined ? "" :"none"
    }} onClick={() => 
    {
      archiveHabitHandler(currentHabit)
    }}>Archive Habit</button>
    <button onClick={() => editHabitHandler(currentHabit)}>Edit Habit</button>
    <button onClick={() => deleteHabitHandler(currentHabit)}>Delete Habit</button>
    <br/>
    <button onClick={() => { navigate("/") }}> {"<-"} Go back to all habits</button>
     </div>;
};
