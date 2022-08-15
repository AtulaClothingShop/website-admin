export const filterObject = (object = {}, filters) => {
  object = JSON.parse(JSON.stringify(object))
  let obj = {}

  filters.forEach((item) => {
    if (object.hasOwnProperty(item)) {
      obj[item] = object[item]
    }
  })

  return obj
}
