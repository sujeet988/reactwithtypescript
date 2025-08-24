
import CourseGoal from "./CourseGoal.tsx";
import{ type CourseGoalProps as cghp} from "../App.tsx";


type CourseGoalListProps = {
  goals: cghp[];
 onDeleteGoal: (id: number) => void;

};


export default function CourseGoalList( {goals,onDeleteGoal}:CourseGoalListProps){
    return (
       <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.Desccription}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    );
}