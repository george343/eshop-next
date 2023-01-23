import Link from "next/link";

const Header = () => {
  const links = [
    { title: "Mens clothing", link: "/products/men's%20clothing" },
    { title: "Womens clothing", link: "/products/women's%20clothing" },
    { title: "Electronics", link: "/products/electronics" },
    { title: "Jewelery", link: "/products/jewelery" },
  ];

  return (
    <nav className='flex w-full justify-between items-center bg-purple-800 text-white font-semibold px-12 text-xl py-10 overflow-hidden md:px-32'>
      <div className='flex items-center gap-5'>
        <Link href='/'>
          <div className='cursor-pointer'>
            <p>E-Shop</p>
          </div>
        </Link>
        <div className='float-left overflow-hidden'>
          <button className='border-none outline-none text-white px-4 py-3 bg-inherit m-0 text-lg'>
            Categories
            <i className='ml-2 p-1 inline-block rotate-45 border-r-2 border-b-2 border-white align-middle'></i>
          </button>
          <div className='hidden absolute bg-purple-800 min-w-max shadow-black/20 z-10 hover:block'>
            {links.map((link) => {
              return (
                <Link
                  key={link.title}
                  className='float-none text-white py-3 px-4 block text-center decoration-none hover:bg-white hover:text-purple-800'
                  href={link.link}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className='flex items-center gap-1 cursor-pointer'>
        <span>🛒</span>
        <p className='snipcart-total-price snipcart-checkout'>$0.00</p>
      </div>
    </nav>
  );
};

export default Header;
