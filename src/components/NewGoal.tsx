 import { type FormEvent } from "react";

export default function NewGoal(){
  function handlesubmit(event:FormEvent){
    event.preventDefault();
  }

    return(
        <form onSubmit={handlesubmit}>
            <p>
                <label htmlFor="text">Your Goal</label>
                <input type="text" id="id"/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input type="text" id="summary"/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );  
}