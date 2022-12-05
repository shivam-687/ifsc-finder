import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import AppProvider from '../providers/AppProvider'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider  client={queryClient}>
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  </QueryClientProvider>
}
