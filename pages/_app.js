import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Script async defer src="https://cdn.boei.help/hello.js" />
    <Component {...pageProps} />
  </>

}

export default MyApp
