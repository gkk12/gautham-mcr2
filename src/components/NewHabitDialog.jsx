import { habitData } from "../data/habitData";
import { useContext, useState } from "react";
import { HabitContext } from "..";
import { useNavigate } from "react-router-dom";
export const NewHabitDialog = () => {
  const [habitImage, setHabitImage] = useState("Meditate");
  const [habitName, setHabitName] = useState("");
  const [habitRepeat, setHabitRepeat] = useState("Yearly");
  const [habitGoal, setHabitGoal] = useState("1 time");
  const [habitTimeOfDay, setHabitTimeOfDay] = useState("Anytime");
  const [habitStartDate, setHabitStartDate] = useState("Today");

  const { addHabit, deleteHabit } = useContext(HabitContext);
  const navigate = useNavigate();

  const habitImageSelector = (event) => {
    console.log(event.target.value);
    setHabitImage(event.target.value)
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
        <label>Choose habit image</label>
        <select onChange={habitImageSelector}>
          <option value="Meditate">Meditate</option>
          <option value="Set a Todo">Set a to-do list</option>
          <option value="Drink Water">Drink Water</option>
          <option value="Read Books">Read Books</option>
          <option value="Running">Running</option>
        </select>
        sdsd
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
        <button onClick={() => addHabit(habitImage,habitName,habitRepeat,habitGoal,habitTimeOfDay,habitStartDate)}>Save</button>
        <button onClick={()=>deleteHabit}>Discard</button>
      </div>
      <button onClick={()=>{navigate("/")}}>All habits</button>
    </div>
  );
};
