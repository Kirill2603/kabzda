import React, {useRef, useState} from "react";

const UncontrolledInput = () => {

  const [value, setValue] = useState('')

  return (
      <div>
        <input
            value={value}
            onChange={(event => {
         const actualValue = event.currentTarget.value
          setValue(actualValue)
        })}/>
      </div>
      )
}

export const UnconrolledInput2 = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }


  return (
      <div>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
      </div>
  )
}

export default UncontrolledInput