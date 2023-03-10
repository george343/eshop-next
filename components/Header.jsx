import Link from "next/link";

const Header = ({ links }) => {
  return (
    <nav className='flex w-full justify-between items-center bg-purple-800 text-white font-semibold px-12 text-xl py-10 overflow-hidden md:px-32'>
      <div className='flex items-center gap-5'>
        <Link href='/'>
          <div className='cursor-pointer'>
            <p>E-Shop</p>
          </div>
        </Link>

        <div className='float-left overflow-hidden group'>
          <button className='border-none outline-none text-white px-4 py-3 bg-inherit m-0 text-lg'>
            Categories
          </button>
          <div className='hidden group-hover:block absolute bg-purple-800 min-w-max shadow-black/20 z-10'>
            {links.map((link) => {
              console.log(link);
              return (
                <Link
                  key={link}
                  className='float-none text-white py-3 px-4 block text-center decoration-none hover:bg-white hover:text-purple-800'
                  href={`/products/${link}`}
                >
                  {link}
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
