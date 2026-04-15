function pad2(value) {
  return String(value).padStart(2, '0')
}

function formatDateFromDate(input) {
  return [
    input.getUTCFullYear(),
    pad2(input.getUTCMonth() + 1),
    pad2(input.getUTCDate())
  ].join('-')
}

function formatYmdString(input) {
  const match = input.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
  if (!match) return ''

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])

  if (month < 1 || month > 12 || day < 1 || day > 31) return ''
  return `${year}-${pad2(month)}-${pad2(day)}`
}

export function formatDate(input) {
  if (!input) return ''

  if (input instanceof Date) {
    if (Number.isNaN(input.getTime())) return ''
    return formatDateFromDate(input)
  }

  if (typeof input === 'string') {
    const direct = formatYmdString(input)
    if (direct) return direct

    const parsed = new Date(input)
    if (!Number.isNaN(parsed.getTime())) return formatDateFromDate(parsed)
    return ''
  }

  const parsed = new Date(input)
  if (!Number.isNaN(parsed.getTime())) return formatDateFromDate(parsed)
  return ''
}

export function compareByDateDesc(a, b, options = {}) {
  const dateKey = options.dateKey || 'date'
  const titleKey = options.titleKey || ''
  const dateA = a?.[dateKey] || ''
  const dateB = b?.[dateKey] || ''

  if (dateA === dateB && titleKey) {
    const titleA = a?.[titleKey] || ''
    const titleB = b?.[titleKey] || ''
    return String(titleA).localeCompare(String(titleB))
  }
  if (!dateA) return 1
  if (!dateB) return -1
  return String(dateB).localeCompare(String(dateA))
}
