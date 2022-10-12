export const parseDate = (dateText: string, format: string): string => {
  const date = new Date(dateText)

  if (isValidDate(date)) {
    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, '0')
    const day = `${date.getMonth()}`.padStart(2, '0')
    const hours = `${date.getHours()}`.padStart(2, '0')
    const minutes = `${date.getMinutes()}`.padStart(2, '0')
    const seconds = `${date.getSeconds()}`.padStart(2, '0')

    return format
      .replace('YYYY', year.toString())
      .replace('YY', (year % 100).toString())
      .replace('MM', month)
      .replace('DD', day)
      .replace('hh', hours)
      .replace('mm', minutes)
      .replace('ss', seconds)
  } else {
    return dateText
  }
}

export const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime())
}
