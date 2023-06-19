import { habitData } from "../data/habitData";
import { useContext, useEffect, useState } from "react";
import { HabitContext } from "..";
import { useNavigate, useParams } from "react-router-dom";
export const NewHabitDialog = () => {
  const [habitTypeImage, setHabitTypeImage] = useState("Mental Health");
  const [habitName, setHabitName] = useState("");
  const [habitRepeat, setHabitRepeat] = useState("Yearly");
  const [habitGoal, setHabitGoal] = useState("1 time");
  const [habitTimeOfDay, setHabitTimeOfDay] = useState("Anytime");
  const [habitStartDate, setHabitStartDate] = useState("Today");
 

  const { addHabit } = useContext(HabitContext);
  const navigate = useNavigate();

  

  const habitTypeImageSelector = (event) => {
    console.log(event.target.value);
    setHabitTypeImage(event.target.value)
  }
  const habitNameSelector = (event) => {
    console.log(event.target.value);
    setHabitName(event.target.value)
  }
  const habitRepeatSelector = (event) => {
    console.log(event.target.value);
    setHabitRepeat(event.target.value)
  }
  const habitGoalSelector = (event) => {
    console.log(event.target.value);
    setHabitGoal(event.target.value)
  }
  const habitTimeOfDaySelector = (event) => {
    console.log(event.target.value);
    setHabitTimeOfDay(event.target.value)
  }
  const habitStartDateSelector = (event) => {
    console.log(event.target.value);
    setHabitStartDate(event.target.value)
  }
  return (
    <div>
      <h3>Enter Habit Details </h3>
      <div>
        <label>Choose category</label>
        <select onChange={habitTypeImageSelector}>
          <option value="Mental Health">Mental Health</option>
          <option value="Productivity">Productivity</option>
          <option value="Healthy Food Habits">Healthy Food Habits</option>
          <option value="Reading">Reading</option>
          <option value="Physical Activity">Physical Activity</option>
        </select>
      </div>
      <br />
      <div>
        <label>Enter habit name</label>
        <input onChange={habitNameSelector} id="" type="text" placeholder="Enter habit name"></input>
      </div>
      <br />
      <div>
        <label>Repeat</label>
        <select onChange={habitRepeatSelector}>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
        </select>
      </div>
      <br />
      <div>
        <label>Goal</label>
        <select onChange={habitGoalSelector}>
          <option value="1 time">1 time</option>
          <option value="2 times">2 times</option>
          <option value="3 times">3 times</option>
          <option value="4 times">4 times</option>
        </select>
      </div>
      <br />
      <div>
        <label>Time of day</label>
        <select onChange={habitTimeOfDaySelector}>
          <option value="Anytime">Anytime</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening/Night">Evening/Night</option>
        </select>
      </div>
      <br />
      <div>
        <label>Start date</label>
        <select onChange={habitStartDateSelector}>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="Next week">Next week</option>
          <option value="Next month">Next month</option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={() => addHabit(habitTypeImage,habitName,habitRepeat,habitGoal,habitTimeOfDay,habitStartDate)}>Save</button>
      </div>
      <br/>
      <button onClick={() => { navigate("/") }}> {"<-"} Go back to all habits</button>
    </div>
  );
};
