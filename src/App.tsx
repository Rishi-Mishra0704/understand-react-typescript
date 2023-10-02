import Name from "./components/Name"
import { Button } from './components/Button'
import TextInput from "./components/Form"
import List from "./components/List"

function App() {
  const handleSubmit = () => {
    alert("Submitted")
  }

  // List 1: An array of numbers
  let list = [1, 2, 4, 5, 6, 7];

  // List 2: An array of strings
  let list1: string[] = ['Rishi', 'Wired', 'Mishra'];

  // List 3: A tuple containing a string and a number
  let list2: [string, number] = ["Risshi", 2];

  // List 4: An empty array
  let list3: [] = [];

  // List 5: A single string
  let list4 = "rihsi";

  return (
    <>
      <Name name="Rishi"/>
      <TextInput placeholder="place" value="IDK" onChange={handleSubmit}/>
      <Button label="idk"/>

      {/* Rendering Lists */}
      <List items={list}/>     {/* Rendering an array of numbers */}
      <List items={list1}/>    {/* Rendering an array of strings */}
      <List items={list2}/>    {/* Rendering a tuple */}
      <List items={list3}/>    {/* Rendering an empty array */}
      <List items={[list4]}/>  {/* Rendering a single string within an array */}
    </>
  )
}

export default App
