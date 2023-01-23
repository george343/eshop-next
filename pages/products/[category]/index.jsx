import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Category = ({ category }) => {
  return (
    <>
      <Head>
        <title>Shop | {category[0].category}</title>
      </Head>
      <div className='container mx-auto mb-8'>
        <h2 className='my-12 text-2xl font-bold'>{category[0].category}</h2>
        <div className='grid grid-cols-1 gap-8 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2'>
          {category.map((cat) => {
            return (
              <div key={cat.id} className='p-5'>
                <Link href={`/products/${cat.category}/${cat.id}`}>
                  <div className='h-64 w-full flex justify-center rounded cursor-pointer'>
                    <Image
                      src={cat.image}
                      width={300}
                      height={300}
                      alt={cat.title}
                      className='object-contain hover:object-cover hover:transition-transform hover:duration-200 hover:scale-110'
                    />
                  </div>
                </Link>
                <div className='h-1/2 flex flex-col justify-between'>
                  <h3 className='font-bold text-lg'>{cat.title}</h3>
                  <div className='flex flex-col'>
                    <h3>Price: {cat.price}€</h3>
                    <button className='snipcart-add-item bg-purple-800 text-white inline-block py-4 px-5 rounded cursor-pointer transition duration-300 border-none hover:bg-purple-900'>
                      Add to cart 🛒
                    </button>
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

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const category = await response.json();

  return {
    props: { category },
  };
}
