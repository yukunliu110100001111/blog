export function getFrontmatter(page) {
  return page?.frontmatter || {}
}

export function pickText(input, fallback = '') {
  if (typeof input === 'string') {
    const value = input.trim()
    return value || fallback
  }
  if (input === null || input === undefined) return fallback

  const value = String(input).trim()
  return value || fallback
}

export function pickLabel(input, fallback = '') {
  if (Array.isArray(input)) {
    const values = input.map((item) => pickText(item, '')).filter(Boolean)
    return values.length ? values.join(' / ') : fallback
  }
  return pickText(input, fallback)
}

export function getTitleFromUrl(url, fallback = 'Untitled') {
  const normalized = decodeURIComponent(url || '').replace(/\/$/, '')
  const segments = normalized.split('/').filter(Boolean)
  return segments.length ? segments[segments.length - 1] : fallback
}

export function normalizeTags(input) {
  if (Array.isArray(input)) {
    return input.map((item) => pickText(item, '')).filter(Boolean)
  }
  const tag = pickText(input, '')
  return tag ? [tag] : []
}
