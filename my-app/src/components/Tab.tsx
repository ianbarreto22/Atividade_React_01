import './Tab.css'

interface TabProps {
  title: string
  content: string
  onSelection: Function
  selected: string
}

export function Tab(props: TabProps) {

  return (
    <button onClick={() => props.onSelection(props.content)}
    className={props.content === props.selected ? 'selected' : ''}> 
        {props.title}
    </button>
  )
}