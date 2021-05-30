const normalizeFloatNumber = (value) => {
  if (!value) return value
  return value < 0 ? 0 : value
}
      
export default normalizeFloatNumber