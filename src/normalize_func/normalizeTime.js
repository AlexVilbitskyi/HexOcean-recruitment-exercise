const normalizeTime = (value) => {
  if (!value) return value;

  const onlyNum = value.replace(/[^\d]/g, '');

  let hh = onlyNum.slice(0, 2);
  let mm = onlyNum.slice(2, 4);
  let ss = onlyNum.slice(4, 6);

  switch (onlyNum.length) {
    case 1 :
      return `${hh}`
    case 2 :
      return `${hh}:`
    case 3 :
      return `${hh}:${mm}`
    case 4 :
      if(mm > 59) {
        mm = 59
      }
      return `${hh}:${mm}:`
    default:
      if(mm > 59) {
        mm = 59
      }
      if(ss > 59) {
        ss = 59
      }
      return `${hh}:${mm}:${ss}`
  }
}
  
export default normalizeTime