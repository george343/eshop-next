import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left_section}>
        <Link href='/'>
          <div className={styles.logo}>
            <p>E-Shop</p>
          </div>
        </Link>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Categories
            <i className={styles.arrow}></i>
          </button>
          <div className={styles.dropdown_content}>
            <Link href="/products/men's%20clothing">Mens clothing</Link>
            <Link href="/products/women's%20clothing">Womens clothing</Link>
            <Link href='/products/electronics'>Electronics</Link>
            <Link href='/products/jewelery'>Jewelery</Link>
          </div>
        </div>
      </div>

      <div className={styles.nav_price}>
        <span>🛒</span>
        <p className='snipcart-total-price snipcart-checkout'>$0.00</p>
      </div>
    </nav>
  );
};

export default Header;
