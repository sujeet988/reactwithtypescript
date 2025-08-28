import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal.tsx";
import{ type CourseGoalProps as cghp} from "../App.tsx";
import InfoBox  from './InfoBox.tsx';   


type CourseGoalListProps = {
  goals: cghp[];
 onDeleteGoal: (id: number) => void;

};


export default function CourseGoalList( {goals,onDeleteGoal}:CourseGoalListProps){
   
    if(goals.length === 0)
        {
            return(
                <InfoBox mode="hint">
                     You have no course goals yet. Start adding some!
                </InfoBox>
            )
        }

 

        let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

    return (
        <>
       {warningBox}
       <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.Desccription}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
    );
}