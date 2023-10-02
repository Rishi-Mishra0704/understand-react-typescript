export interface buttonProps{
  label: string
}


export function Button(props: buttonProps) {
  return <button>{props.label}</button>;
}
