export const setSessionStore = (a, b) => {
  if (!a) {
    return false
  }
  if (typeof b !== 'string') {
    b = JSON.stringify(b)
  }
  window.sessionStorage.setItem(a, b)
}

export const getSessionStore = (a) => {
  if (!a) {
    return false
  }
  return window.sessionStorage.getItem(a)
}

export const delSessionStore = (a) => {
  if (!a) {
    return false
  }
  window.sessionStorage.removeItem(a)
}

export const formatDateTime = (inputTime) => {
  var date = new Date(inputTime)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}
