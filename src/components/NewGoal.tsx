 import { type FormEvent, useRef } from "react";

 type NewGoalProps = {
    onAddGoal: (goal:string, summary:string) => void;
}

export default function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
   const summary = useRef<HTMLInputElement>(null);

  function handlesubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();

      const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

    return(
        <form onSubmit={handlesubmit}>
            <p>
                <label htmlFor="text">Your Goal</label>
                <input type="text" id="id" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input type="text" id="summary" ref ={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );  
}