const safeString = (text) => (typeof text === 'string' ? text.trim() : '')

export function capitalizeFirstLetter(text) {
  const str = safeString(text)
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}

export function toLowerCaseAll(text) {
  return safeString(text).toLowerCase()
}

export function toUpperCase(text) {
  return safeString(text).toUpperCase()
}
