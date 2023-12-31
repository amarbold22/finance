import UserProvider from '@/context/UserProvider'
import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { StepProvider } from '@/context/StepContext'
import TransactionProvider from '@/context/TransactionContext'

export default function App({ Component, pageProps }) {
  return(
    <UserProvider>
      <TransactionProvider>
        <StepProvider>
          <Component {...pageProps} />
          <ToastContainer/>
        </StepProvider>
      </TransactionProvider>
    </UserProvider> 
)
}
