import Footer from "./Footer";
import Header from "./Header";
import useSWR from 'swr';

const Layout = ({children}) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {data, error} = useSWR("https://fakestoreapi.com/products/categories", fetcher);

  if(error) return <div>Failed to load</div>;
  if(!data) return <div>Loading...</div>;

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header links={data} />
      <div className='mb-auto'>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
