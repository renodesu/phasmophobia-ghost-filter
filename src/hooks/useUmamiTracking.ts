import { useEffect } from 'react'

export const useUmamiTracking = () => {
  useEffect(() => {
    // Hack to make tracking script work
    const script = document.createElement('script')
    if (import.meta.env.PROD) {
      script.src = 'https://umami-analytics-rho.vercel.app/umami.js'
      script.async = true
      script.defer = true
      script.dataset.websiteId = '181fa169-6fcb-4f5c-9efc-f20f7a7e5e3e'
      document.head.appendChild(script)
    }

    return () => {
      if (import.meta.env.PROD) {
        document.head.removeChild(script)
      }
    }
  }, [])
}
