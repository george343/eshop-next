import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Button from "@/components/button";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <div className='container'>
        <h2 className={styles.title}>All Products</h2>
        <div className={styles.products_container}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.product_card}>
                <Link href={`/products/${product.category}/${product.id}`}>
                  <div className={styles.product_img}>
                    <Image
                      src={product.image}
                      width={300}
                      height={300}
                      alt={product.title}
                    />
                  </div>
                </Link>
                <div className={styles.product_content}>
                  <h3>{product.title}</h3>
                  <div className={styles.price_add_to_cart}>
                    <h3>Price: {product.price}€</h3>
                    <Button
                      className='btn snipcart-add-item'
                      id={product.id}
                      price={product.price}
                      slug={product.title}
                      image={product.image}
                      name={product.title}
                    >
                      Add to cart 🛒
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
