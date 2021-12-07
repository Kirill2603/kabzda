import React, {ChangeEvent, useState} from "react";

const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>('2')
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }


  return (
      <div>
        <select value={parentValue} onChange={onChange}>
          <option value="1">none</option>
          <option value="2">Minsk</option>
          <option value="3">Moscow</option>
          <option value="4">Kiev</option>
        </select>
      </div>
  )
}

export default ControlledSelect