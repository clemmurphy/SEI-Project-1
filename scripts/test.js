const gridWidth = 28
const gridHeight = 36
const cellCount = gridWidth * gridHeight
const cellMap = []
const stageOne = [
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,5,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,5,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,6,1,1,6,1,1,1,1,1,0,1,1,1,1,1,1,
  6,6,6,6,6,1,0,1,1,1,1,1,6,1,1,6,1,1,1,1,1,0,1,6,6,6,6,6,
  6,6,6,6,6,1,0,1,6,6,6,6,6,6,6,6,6,6,6,6,1,0,1,6,6,6,6,6,
  6,6,6,6,6,1,0,1,6,1,1,1,1,2,2,1,1,1,1,6,1,0,1,6,6,6,6,6,
  1,1,1,1,1,1,0,1,6,1,2,2,2,2,2,2,2,2,1,6,1,0,1,1,1,1,1,1,
  4,6,6,6,6,6,0,6,6,1,2,2,2,2,2,2,2,2,1,6,6,0,6,6,6,6,6,4,
  1,1,1,1,1,1,0,1,6,1,2,2,2,2,2,2,2,2,1,6,1,0,1,1,1,1,1,1,
  6,6,6,6,6,1,0,1,6,1,1,1,1,1,1,1,1,1,1,6,1,0,1,6,6,6,6,6,
  6,6,6,6,6,1,0,1,6,6,6,6,6,6,6,6,6,6,6,6,1,0,1,6,6,6,6,6,
  6,6,6,6,6,1,0,1,6,1,1,1,1,1,1,1,1,1,1,6,1,0,1,6,6,6,6,6,
  1,1,1,1,1,1,0,1,6,1,1,1,1,1,1,1,1,1,1,6,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,5,0,0,1,1,0,0,0,0,0,0,0,6,3,0,0,0,0,0,0,0,1,1,0,0,5,1,
  1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6
]

// populate cellmap into 2D array
// each horizontal row added into an array
for (let rowStart = 0; rowStart < cellCount; rowStart += gridWidth) {
  console.log(`Adding ${rowStart} to ${rowStart + gridWidth}`)
  const mapRow = []
  for (let i = rowStart; i < (rowStart + gridWidth); i++) {
    console.log(`Adding ${i}`)
    mapRow.push(stageOne[i])
  }
  cellMap.push(mapRow)
}
console.log(cellMap)