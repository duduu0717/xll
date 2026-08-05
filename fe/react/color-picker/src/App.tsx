import { useState } from 'react'
import ColorBrowser from './components/ColorBrowser'
import { type Color } from './model/color';
import ColorPicker from './components/ColorPicker';
import MemberTable from './components/MemberTable';

function App() {
  // ts 适合大型项目开发， 代码量大， 成员多
  const [color, setColor] = useState<Color>({
    red: 20,
    green: 240,
    blue: 180
  });
  return (
    <>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <MemberTable />
    </>
  )
}

export default App
