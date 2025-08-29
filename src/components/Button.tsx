import { type ComponentPropsWithoutRef} from 'react';

type buttonProps =
{
    el:'button';

}& ComponentPropsWithoutRef<'button'>;

type anchorProps =
{
    el:'anchor';


} & ComponentPropsWithoutRef<'a'>

export default function Button(props: buttonProps | anchorProps){
   
     if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}