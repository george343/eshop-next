import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

export default function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <div className='container mx-auto mb-16 sm:px-12'>
        <h2 className='my-12 text-2xl font-bold'>All Products</h2>
        <div className='flex w-1/2 container m-auto gap-4 items-center h-8'>
          <h2 className='text-2xl'>Categories:</h2>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                className='text-lg my-2 hover:border-b-2 hover:border-purple-800 ease-in-out duration-200'
                href={`/products/${category}`}
              >
                {category}
              </Link>
            );
          })}
        </div>
        <div className='grid grid-cols-1 gap-8 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2'>
          {products.map((product) => {
            return (
              <div key={product.id} className='p-5'>
                <Link href={`/products/${product.category}/${product.id}`}>
                  <div className='h-64 w-full flex justify-center rounded cursor-pointer'>
                    <Image
                      src={product.image}
                      width={300}
                      height={300}
                      alt={product.title}
                      className='object-contain hover:object-cover hover:transition-transform hover:duration-200 hover:scale-110'
                    />
                  </div>
                </Link>
                <div className='h-1/2 flex flex-col justify-between'>
                  <h3 className='font-bold text-lg'>{product.title}</h3>
                  <div className='flex flex-col'>
                    <h3 className='mx-1'>Price: {product.price}€</h3>
                    <Button
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

export async function getServerSideProps(context) {
  const responseProducts = await fetch("https://fakestoreapi.com/products");
  const products = await responseProducts.json();

  const responseCategories = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const categories = await responseCategories.json();

  console.log(categories);

  return {
    props: { products, categories },
  };
}
