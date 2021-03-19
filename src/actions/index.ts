// FILE
interface file {
  type: string
  data: string
}

interface empty {
  type: string
}

export const setFile = (data: string): file => {
  return {
    type: 'SET_FILE',
    data: data
  }
}

export const clearFile = (): empty => {
  return {
    type: 'CLEAR_FILE'
  }
}

// PRAMS
interface params {
  'domainName': string,
  'dataSourceName': string,
  'fileName': string,
  'fileNameDateMask': string,
  'fileNameWithoutDate': string,
  'fileExtension': string,
  'isHeader': boolean,
  'columnDelimiter': string,
  'columnQuoting': string,
  'quoteCharacter': string,
  'escapeCharacter': string,
  'fileFrequency': string,
  'encryption': string,
  'isDelta': boolean,
  'transferMethod': string
}
interface paramsStr {
  type: string
  data: params
}
export const setParams = (data: params): paramsStr => {
  return {
    type: 'SET_PARAMS',
    data: data
  }
}

export const clearParams = (): empty =>{
  return {
    type: 'CLEAR_PARAMS'
  }
}