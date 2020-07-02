import moment from 'moment'

const parseDate = (date) => {
  if (!moment(date, 'DD/MM/YYYY', true).isValid()) return null
  const [d, m, y] = date.split('/')
  date = new Date(`${m}/${d}/${y}`)

  const today = new Date()
  return date > today || today.getUTCFullYear() - parseInt(y) >= 122
    ? null
    : date
}

export default function (_, inject) {
  inject('validations', {
    validURL(url) {
      const pattern = new RegExp(
        '^((ft|htt)ps?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
        '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      ) // fragment locator
      return (
        url === '' ||
        url === 'default_avatar' ||
        pattern.test(url) ||
        'URL inválido'
      )
    },
    date() {
      return (date) => date === '' || !!parseDate(date) || 'Data inválida'
    },
    email() {
      return (email) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return email === '' || pattern.test(email) || 'E-mail inválido'
      }
    },
    minFieldLength(fieldText, fieldLength) {
      return (fieldText) =>
        fieldText.length >= fieldLength ||
        `O campo deve ter no mínimo ${fieldLength} caracteres`
    },
    required(field) {
      return (f) =>
        (f != null && Object.values(f).length > 0) ||
        f === true ||
        f === false ||
        `O campo${field ? ' ' + field : ''} é obrigatório`
    },
    masks: {
      date: '##/##/####',
    },
  })
}
