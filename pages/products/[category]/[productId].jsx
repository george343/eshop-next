import Head from "next/head";
import styles from "../../../styles/SingleProduct.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const SingleProduct = ({ product }) => {
  if (!product) {
    return (
      <div className={styles.single_container}>
        <h1>Getting the item...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={styles.single_container}>
        <div className={styles.left_section}>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={700}
          />
        </div>
        <div className={styles.right_section}>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.category}>
            <Link href={`/products/${product.category}`}>
              <h3>in {product.category}</h3>
            </Link>
          </div>
          <p className={styles.price}>{product.price}€</p>
          <div className={styles.para}>
            <p>{product.description}</p>
          </div>
          <div className={styles.rating}>
            <h4>
              Rating: {product.rating.rate} out of {product.rating.count}{" "}
              reviews.
            </h4>
          </div>
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
          <div className={styles.home_link}>
            <Link href='/'>
              <i class={styles.arrow_right}></i>Back to Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: ["/products/jewlery/5", "/products/jewlery/6"],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.productId}`
  );
  const product = await response.json();

  return {
    props: { product },
  };
}
