import React from 'react'

const OPTIONS = [10, 25, 50, 100]

const SizeSelect = ({ onChange, value }) => {
  const handleChange = event => {
    const newValue = event.target.value

    if (newValue !== value) {
      onChange(newValue)
    }
  }

  return (
    <select onChange={handleChange} onBlur={handleChange} value={value}>
      {OPTIONS.map(number => (
        <option value={number} key={number}>
          {number}
        </option>
      ))}
    </select>
  )
}

export { SizeSelect }
