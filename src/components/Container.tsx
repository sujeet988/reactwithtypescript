
import {type ElementType} from 'react';

type conatinertypesprops = {
    as : ElementType;
};

export default function Container({as}:conatinertypesprops){
    const Component  = as;
     return <Component  />
   
}
