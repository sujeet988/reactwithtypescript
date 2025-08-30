import { type ReactNode, createContext,useContext } from "react";   
import Timer from "../components/Timer";

type timer = 
{
    name: string;
    duration: number;
}

type TimerState = 
{
    isrunning: boolean;
    timers: timer[];
}

type TimersContextValue = TimerState & {
    addTimer: (Timerdata: timer) => void;
    startimers: () => void;
    stopTimers: () =>  void;
}

const TimersContext =  createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
    children: ReactNode
}


export default function TimersContextProvider({children}: TimersContextProviderProps){

   const  ctx: TimersContextValue = {
    timers:[],
    isrunning: true,
    addTimer(Timerdata){
        //`add timer logic`
    },
      startimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
    
   };

    return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}