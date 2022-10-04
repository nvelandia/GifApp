import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInput = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const value = inputValue.trim()
        if(value){
            onAddCategory(value);
            setInputValue('')
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder="Search gif"
            value={inputValue}
            onChange={onInput}
        />
    </form>
  )
}
