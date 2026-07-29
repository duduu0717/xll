import * as React from 'react';
import HelloComponent from './components/HelloComponent';
import NameEditComponent2 from './components/NameEditComponent2';
// 写js一样写ts
const App = () => {
  const [name, setName] = React.useState<string>('defaultUserName');
  // 编辑中的
  const [editingName, setEditingName] =
    React.useState<string>('defaultUserName');

  const loadUserName = () => {
    setTimeout(() => {
      setName('name from async call');
      setEditingName('name from async call');
    }, 2000);
  }
  // 副作用：在组件挂载后执行一次
  React.useEffect(() => {
    // 组件挂载后执行一次
    // 从服务器加载用户名
    // 并将用户名设置为组件的状态
    // 组件第一要素是赶快显示出来，让用户觉得快
    loadUserName();
  }, []);

  const setUsernameState = () => {
    setName(editingName);
  }
  return (
    <>
      名字:{name}
      <HelloComponent userName={editingName} />
      <NameEditComponent2
        initialUsername={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
    </>
  )
}

export default App;
