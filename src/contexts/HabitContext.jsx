import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {habitTypesData} from "../data/habitData"
import { useNavigate } from "react-router-dom";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const newUuid = uuidv4();
  const [habits, setHabits] = useState([]);
  const [archivedHabits, setArchivedHabits] = useState([]);
  const [activeHabits, setActiveHabits] = useState([]);

  const navigate = useNavigate();
  const addHabit = (habitTypeImage, habitName, habitRepeat, habitGoal, habitTimeOfDay, habitStartDate) => {
    console.log(habitTypeImage, habitName, habitRepeat, habitGoal, habitTimeOfDay, habitStartDate)
    setHabits([...habits, { habitId: newUuid, habitTypeImage: habitTypeImage, habitName: habitName, habitRepeat: habitRepeat, habitGoal: habitGoal, habitTimeOfDay: habitTimeOfDay, habitStartDate: habitStartDate }]);
    setActiveHabits([...activeHabits, { habitId: newUuid ,habitTypeImage:habitTypeImage,habitName:habitName ,habitRepeat:habitRepeat,habitGoal:habitGoal,habitTimeOfDay:habitTimeOfDay,habitStartDate:habitStartDate }]);
  };
  const habitTypeImageGetter = (name) => {

    console.log(name);
    return habitTypesData.find(habit => habit.habitCategory === name).habitTypeImage;
  }
  
  const deleteHabitHandler = (habit) => {
    setHabits(
      () =>
        habits.filter(eachHabit => eachHabit.habitId !== habit.habitId));
    setActiveHabits(
          () =>
        activeHabits.filter(eachHabit => eachHabit.habitId !== habit.habitId));
    setArchivedHabits(
          () =>
         archivedHabits.filter(eachHabit=> eachHabit.habitId !== habit.habitId));
     navigate("/")
  };

  const editHabit = (habitId,habitTypeImage,habitName,habitRepeat,habitGoal,habitTimeOfDay,habitStartDate) => {
    setHabits(()=>habits.map(habit => {
      if (habit.habitId === habitId) {
        return {...habit,habitTypeImage,habitName,habitRepeat,habitGoal,habitTimeOfDay,habitStartDate }
      }
    }));
    setActiveHabits(()=>activeHabits.map(habit => {
      if (habit.habitId === habitId) {
        return {...habit,habitTypeImage,habitName,habitRepeat,habitGoal,habitTimeOfDay,habitStartDate }
      }
    }));
  }

  const archiveHabitHandler = (currentHabit) => {
    setArchivedHabits([...archivedHabits, { ...currentHabit }])
    
    setActiveHabits(
      () =>
     habits.filter(eachHabit=> eachHabit.habitId !== currentHabit.habitId));
     navigate("/")
  }
  return (
    <HabitContext.Provider value={{ activeHabits,habits,addHabit, deleteHabitHandler,editHabit,archiveHabitHandler,habitTypeImageGetter ,archivedHabits}}>
      {children}
    </HabitContext.Provider>
  );
};
