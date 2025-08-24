
import  Header from "./components/Header.tsx";
import  goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { useState } from "react";

export type CourseGoalProps = {
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
        title:'Learn React + TS',
        Desccription:'Learn it in depth!',
        id: Math.random()
      };
      return [...prevGoals, newGoal];
    });
  }
    function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>

      <Header image={{ src:goalsImg, alt:'A List of goals'}}  >
        <h1>your Course Goals</h1>
      </Header>
      <button onClick={handleAddGlobal} >Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}