export const API_BASE_URL = import.meta.env.VITE_API_URL.replace(/\/$/, '')

export const apiUrl = (path) =>
  `${API_BASE_URL}/${path.replace(/^\//, '')}`

export const storageUrl = (path) => {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path

  const storagePath = path.replace(/^\/?(?:storage\/)?/, '')
  const appUrl = API_BASE_URL.replace(/\/api$/, '')

  return `${appUrl}/storage/${storagePath}`
}
