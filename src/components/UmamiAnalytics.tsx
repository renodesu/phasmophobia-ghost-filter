const UmamiAnalytics = () => {
  if (import.meta.env.PROD) {
    return (
      <script
        async
        defer
        data-website-id="181fa169-6fcb-4f5c-9efc-f20f7a7e5e3e"
        src="https://umami-analytics-rho.vercel.app/umami.js"
      ></script>
    )
  }
  return null
}

export default UmamiAnalytics
