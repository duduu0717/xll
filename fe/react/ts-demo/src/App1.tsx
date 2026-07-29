import * as React from 'react';
import HelloComponent from './components/HelloComponent';
import NameEditComponent1 from './components/NameEditComponent1';
const App: React.FC = () => {
  const [username, setUserName] = React.useState('initialName');
  // const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserName(event.target.value);
  // }
  return (
    <div>
      <HelloComponent userName={username} />
      {/* <NameEditComponent 
      username={username} 
      onChange={setUsernameState}
      /> */}
      <NameEditComponent1
        initialUsername={username}
        onNameUpdated={setUserName}
      />
    </div>
  )
}

export default App