
import CourseGoal from "./CourseGoal.tsx";
import{ type CourseGoalProps as cghp} from "../App.tsx";


type CourseGoalListProps = {
  goals: cghp[];

};


export default function CourseGoalList( {goals}:CourseGoalListProps){
    return (
       <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title}>
            <p>{goal.Desccription}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    );
}