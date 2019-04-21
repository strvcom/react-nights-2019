import React from 'react'

const options = [10, 25, 50, 100]

const SizeSelect = ({ onChange, value }) => (
  // eslint-disable-next-line jsx-a11y/no-onchange
  <select onChange={onChange} value={value}>
    {options.map(number => (
      <option value={number} key={number}>
        {number}
      </option>
    ))}
  </select>
)

export { SizeSelect }
