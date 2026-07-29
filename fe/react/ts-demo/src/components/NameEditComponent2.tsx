import * as React from 'react';

interface Props {
  initialUsername: string
  editingName: string
  onNameUpdated: () => void
  onEditingNameUpdated: (newName: string) => void
  disabled: boolean
}

const NameEditComponent2: React.FC<Props> = (props) => {
  const {
    editingName,
    onNameUpdated,
    onEditingNameUpdated,
    disabled
  } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEditingNameUpdated(e.target.value);
  }
  const onNameSubmit = () => {
    onNameUpdated();
  }
  return (
    <>
      <label>Update name</label>
      <input
        value={editingName}
        onChange={onChange}

      />
      <button
        disabled={disabled}
        onClick={onNameSubmit}
      >Update</button>
    </>
  )
}

export default NameEditComponent2;