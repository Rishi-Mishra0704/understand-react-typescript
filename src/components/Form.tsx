interface inputProps{
    placeholder:string,
    value:string,
    onChange: VoidFunction
}

function TextInput(props:inputProps) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextInput