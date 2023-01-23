import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App ({Component, pageProps}) {
  return (
    <>
      <Layout>
        <Component {...pageProps} classname='m-0 p-0' />
      </Layout>
    </>
  );
}
