import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const newUuid = uuidv4();
  const [habits, setHabits] = useState([]);
  const addHabit = (habitImage, habitName, habitRepeat, habitGoal, habitTimeOfDay, habitStartDate) => {
    console.log(habitImage, habitName, habitRepeat, habitGoal, habitTimeOfDay, habitStartDate)
    setHabits([...habits, { habitId: newUuid , habitImage:habitImage,habitName:habitName ,habitRepeat:habitRepeat,habitGoal:habitGoal,habitTimeOfDay:habitTimeOfDay,habitStartDate:habitStartDate }]);
  };

  const removeHabit = () => {};

  return (
    <HabitContext.Provider value={{ habits,addHabit, removeHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
