// FILE
// String
export const setFile = (data) => {
  return {
    type: 'SET_FILE',
    data: data
  }
}

export const clearFile = () =>{
  return {
    type: 'CLEAR_FILE'
  }
}

// PRAMS
// Dict
export const setParams = (data) => {
  return {
    type: 'SET_PARAMS',
    data: data
  }
}

export const clearParams = () =>{
  return {
    type: 'CLEAR_PARAMS'
  }
}