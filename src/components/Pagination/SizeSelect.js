import React from 'react'
import { PAGE_SIZE_OPTIONS } from '../../constants'

const SizeSelect = ({ onChange, value }) => {
  const handleChange = event => {
    const newValue = event.target.value

    if (newValue !== value) {
      onChange(newValue)
    }
  }

  return (
    <select onChange={handleChange} onBlur={handleChange} value={value}>
      {PAGE_SIZE_OPTIONS.map(number => (
        <option value={number} key={number}>
          {number}
        </option>
      ))}
    </select>
  )
}

export { SizeSelect }
