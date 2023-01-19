import Link from "next/link";

const Category = ({ data }) => {
  return <>{data}</>;
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

  const data = category[0].category;

  return {
    props: { data },
  };
}
