export const generateMockData = function(optionsCount: number) {
  const data = []

  for (let i = 0; i < optionsCount; i++) {
    data.push({ value: i, title: `User #${i + 1}` })
  }

  return data
}
