import CourseGoal from "./components/CourseGoal.tsx";
import  Header from "./components/Header.tsx";
import  goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoalProps = {
  title:string;
  Desccription:string;
  id:number;
}

export default function App() {

   const[goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGlobal()
  {
    setGoals((prevGoals) => {
      const newGoal:CourseGoalProps = {
        title:'New Goal',
        Desccription:'New Description',
        id: Math.floor(Math.random() * 10000)
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>

      <Header image={{ src:goalsImg, alt:'A List of goals'}}  >
        <h1>your Course Goals</h1>
      </Header>
      <button onClick={handleAddGlobal} >Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
             <CourseGoal title ={goal.title} >
          <p>{goal.Desccription}</p>
      </CourseGoal>
          </li>
        ))}
      </ul>

     
    </main>
  );
}