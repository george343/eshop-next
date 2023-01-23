import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const SingleProduct = ({ product }) => {
  if (!product) {
    return (
      <div className='flex items-center w-full gap-10 px-64'>
        <h1>Getting the item...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className='flex flex-col lg:flex-row items-center w-full gap-10 px-12 my-12 lg:px-32'>
        <div className='h-max p-8 flex items-center justify-center basis-1/2'>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={700}
          />
        </div>
        <div className='basis-1/2'>
          <h3 className='mt-4 text-3xl font-bold'>{product.title}</h3>
          <div className='flex items-center mb-2'>
            <Link className='text-black' href={`/products/${product.category}`}>
              <h3>in {product.category}</h3>
            </Link>
          </div>
          <p className='text-2xl'>{product.price}€</p>
          <div className='my-3'>
            <p>{product.description}</p>
          </div>
          <div className='my-2'>
            <h4>
              Rating: {product.rating.rate} out of {product.rating.count}{" "}
              reviews.
            </h4>
          </div>
          <Button
            id={product.id}
            price={product.price}
            slug={product.title}
            image={product.image}
            name={product.title}
          >
            Add to cart 🛒
          </Button>
          <div className='mt-4'>
            <Link className='text-black' href='/'>
              <i class='ml-2 p-1 inline-block rotate-45 border-l-2 border-b-2 border-black align-middle'></i>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.productId}`
  );
  const product = await response.json();

  return {
    props: { product },
  };
}
