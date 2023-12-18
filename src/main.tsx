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
  <div>
    <div className="bb-w-full bb-max-w-[1400px] bb-h-96 bb-bg-gray-100 bb-my-12 bb-mx-auto"></div>
    <div className="bb-w-screen bb-px-4 bb-max-w-[1400px] bb-mt-24 bb-mx-auto md:bb-aspect-video max-2xl:bb-h-screen">
      <BrickBuilder options={testOptions} />
    </div>
    <div className="bb-w-full bb-max-w-[1400px] bb-h-96 bb-bg-gray-100 bb-my-12 bb-mx-auto"></div>
  </div>
)
