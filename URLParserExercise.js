let urlFormat = '/:version/api/:collection/:id'
let url = '/6/api/listings/3?sort=desc&limit=10'

function urtToHash(urlFormat, url) {
  function arr2obj(arr) {
    return arr.reduce(
      (acc, curr) => {
        // Extract the key and the value
        let key = curr[0]
        let value = curr[1]

        // Assign key and value
        // to the accumulator
        acc[key] = value

        // Return the accumulator
        return acc
      },

      // Initialize with an empty object
      {}
    )
  }

  let urlAndQuery = url.split('?')
  let formatParts = urlFormat.split('/')
  let formatPartsWithIndex = formatParts.map((word, index) => [word, index])
  let namesWithIndexFiltered = formatPartsWithIndex.filter(
    (word) => word[0][0] === ':'
  )

  let namesWithIndex = namesWithIndexFiltered.map((arr) => [
    arr[0].substring(1),
    arr[1],
  ])

  let urlPartsAndIndex = urlAndQuery[0]
    .split('/')
    .map((word, index) => [word, index])
  //join format names with url values
  let formatNameUrlValue = namesWithIndex.map((arr) => [
    arr[0],
    urlPartsAndIndex[arr[1]][0],
  ])
  let splitQuery = urlAndQuery[1].split('&')
  let namesAndValueQuery = splitQuery.map((arr) => [
    arr.split('=')[0],
    arr.split('=')[1],
  ])

  let joined = formatNameUrlValue.concat(namesAndValueQuery)

  let hash = arr2obj(joined)
  return hash
}

let hash = urtToHash(urlFormat, url)
console.log(hash)
