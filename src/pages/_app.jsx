import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'
import CompsLayoutsNavbar from '@/components/_Navbar'
import Footer from '@/components/_Footer'

import appWithSession from '@/hoc/appWithSession'

const EmptyLayout = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout
  return (
    <div id="pages" className="d-flex flex-column">
      <CompsLayoutsNavbar />
      <Layout>
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
        <Footer />
      </Layout>
    </div>
  )
}

export default appWithSession(appWithTranslation(MyApp))
