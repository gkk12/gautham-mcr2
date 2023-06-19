import { useContext } from "react"
import {HabitContext} from ".."
import { useNavigate } from "react-router-dom";
export const ArchivedHabits = () => {
    const { archivedHabits, habitTypeImageGetter } = useContext(HabitContext);
    const navigate = useNavigate();
    return <div>
        <h2>Archived Projects</h2>
        {archivedHabits.length>0 ? archivedHabits.map(habit => (
        <div style={{cursor:"pointer"}} onClick={() => {
                console.log(habit.habitId);
          navigate(`/about/${habit.habitId}`)
          }}>
            <p>{habit.habitName}</p>
            <img  src={habitTypeImageGetter(habit.habitTypeImage)}width={250} height={350}></img>
          </div>
        )) : "There are no archived projects"}
        <br/>
    <button onClick={() => { navigate("/") }}> {"<-"} Go back to all habits</button>
    </div>
}
