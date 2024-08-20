import Accordion, {Item, Toggle, Panel}from './Accordion.js'
import data  from './data'
import './App';


export default function App() {

  return (
    <main>
      <h1>Frequently asked questions</h1>
      <Accordion className="accordion">
      {data.data.map((question) => (
        <Item className = "item" key={question.id} id={question.id}>
          <Toggle className = "header">{question.header}</Toggle>
          <Panel className = "panel">{question.body}</Panel>
        </Item>
  ))}
      </Accordion>
    </main>
  )
}