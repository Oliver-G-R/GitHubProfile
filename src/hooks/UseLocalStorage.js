import { useState } from 'react'

export const UseLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const valueLocalSTorage = window.localStorage.getItem(key)
      const valueToJsonParse = valueLocalSTorage ? JSON.parse(valueLocalSTorage) : defaultValue

      return valueToJsonParse
    } catch (error) {
      return defaultValue
    }
  })

  const setValueToLocalStorage = (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setValue(newValue)
    } catch (e) {
      console.error(e)
    }
  }

  return [
    value,
    setValueToLocalStorage
  ]
}
