import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Header.module.css";

const Category = ({ category }) => {
  return (
    <>
      <Head>
        <title>Shop | {category[0].category}</title>
      </Head>
      <div className='container'>
        <h2 className={styles.title}>{category[0].category}</h2>
        <div className={styles.products_container}>
          {category.map((cat) => {
            return (
              <div key={cat.id} className={styles.product_card}>
                <Link href={`/products/${cat.category}/${cat.id}`}>
                  <div className={styles.product_img}>
                    <Image
                      src={cat.image}
                      width={300}
                      height={300}
                      alt={cat.title}
                    />
                  </div>
                </Link>
                <div className={styles.product_content}>
                  <h3>{cat.title}</h3>
                  <div className={styles.price_add_to_cart}>
                    <h3>Price: {cat.price}€</h3>
                    <button className='btn'>Add to cart 🛒</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;

export async function getStaticPaths() {
  return {
    paths: [
      "/products/electronics",
      "/products/men's clothing",
      "/products/jewelery",
      "/products/women's clothing",
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const category = await response.json();

  // const data = category[0].category;

  return {
    props: { category },
  };
}
