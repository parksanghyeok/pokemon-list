import '../styles/app.scss';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { useRef } from "react";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        }
      }
    })
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}