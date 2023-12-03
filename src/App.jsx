import { useState } from 'react'
import Graph from 'react-graph-vis'
import './App.css'

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: '#000000'
  }
}

function randomColor () {
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  return `#${red}${green}${blue}`
}

function App () {
  const initial = {
    counter: 5,
    graph: {
      nodes: [
        { id: 1, label: 'Node 1', color: '#e04141' },
        { id: 2, label: 'Node 2', color: '#e09c41' },
        { id: 3, label: 'Node 3', color: '#e0df41' },
        { id: 4, label: 'Node 4', color: '#7be041' },
        { id: 5, label: 'Node 5', color: '#41e0c9' }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log('Selected nodes:')
        console.log(nodes)
        console.log('Selected edges:')
        console.log(edges)
        alert('Selected node: ' + nodes)
      }
    }
  }
  const [state] = useState(initial)

  const { graph, events } = state
  return (
    <>
      <h1>strex</h1>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: '640px' }}
      />
    </>
  )
}

export default App
