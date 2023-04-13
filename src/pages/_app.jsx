import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'
import CompsLayoutsNavbar from '@/components/login-btn'

import appWithSession from '@/hoc/appWithSession'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CompsLayoutsNavbar />
      <SessionProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </SessionProvider>
    </>
  )
}

export default appWithSession(appWithTranslation(MyApp))
