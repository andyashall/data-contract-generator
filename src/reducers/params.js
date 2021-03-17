const initialState = {
    'domainName': 'EXP',
    'dataSourceName': 'EXP',
    'fileName': 'data_discovery_tool_sample_input_CCYYMMDDHHMISS',
    'fileNameDateMask': 'CCYYMMDDHHMISS',
    'fileNameWithoutDate': 'data_discovery_tool_sample_input',
    'fileExtension': '.csv',
    'isHeader': 'TRUE',
    'columnDelimiter': ',',
    'columnQuoting': 'Some',
    'quoteCharacter': '"',
    'escapeCharacter': '',
    'fileFrequency': 'Ad-Hoc',
    'encryption': '',
    'isDelta': 'TRUE',
    'transferMethod': 'SFG'
}

const file = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILE':
      return action.data
    case 'CLEAR_FILE': 
      return ''
    default:
      return state
  }
}

export default file