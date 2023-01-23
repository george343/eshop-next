import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <div className='mb-auto'>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
