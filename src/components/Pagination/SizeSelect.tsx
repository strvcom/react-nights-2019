import React, { ChangeEvent, FC } from 'react'
import { PAGE_SIZE_OPTIONS } from '../../constants'

type Props = {
  value: number
  onChange: (value: number) => void
}

const SizeSelect: FC<Props> = ({ onChange, value }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value, 10)

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
