import ReactDOM from 'react-dom/client'
import BrickBuilder from './App.tsx'
import './style.css'

const testOptions = {
  name: 'Emerald Duck',
  slug: 'emerald-duck',
  bricks: [
    { color: '#13af23', element_id: '3003', name: '2x2', texture: null, amount: 4 },
    { color: '#ff191c', element_id: '3021', name: '2x3 flat', texture: null, amount: 3 },
    {
      color: '#13af23',
      element_id: '3005',
      name: '1x1',
      texture:
        'https://cdn.sanity.io/images/e73x02f5/production/8be58a2983aa6ce89aff7f65b879f5c82063fcb1-370x223.png',
      amount: 2,
    },
  ],
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="bb-w-[100dvw] bb-h-[100dvh]">
    <BrickBuilder options={testOptions} />
  </div>
)
