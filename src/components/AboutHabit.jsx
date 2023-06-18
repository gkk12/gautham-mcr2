import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { habitData } from "../data/habitData";
import {HabitContext} from ".."

export const AboutHabit = () => {
  const { imageId } = useParams();
  const { habits } = useContext(HabitContext);
  let currentProd = {};

  const imageCategoryFinder = (name) => {
    // console.log();
    return habitData.find(habit => habit.imageCategory === name).imageCategory;
  }



  return <div>This is a Habit
    {habitData.map(habit =>
      <div>{ habit.imageCategory}</div>)}
  </div>;
};
