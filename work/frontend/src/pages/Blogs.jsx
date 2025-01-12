import React from 'react';
import Footer from '../components/Footer';

// const Blogs = () => {
//   return <div className="">Blogs</div>;
// };

const Blogs = () => {
  const [products, setProducts] = React.useState([]);
  const handleClick = () => {
    getProducts();
  };

  const getProducts = async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    // console.log(products);
    setProducts(products);
  };

  return (
    <>
      <div className="">Blogs</div>
      {/* <div>{JSON.stringify(products)}</div> */}
      <div className="m-2">
        <button onClick={handleClick} className="bg-green-200">
          FETCH PRODUCTS
        </button>
        {/* <p>{dogData.status === 'success' && 'Fetch Success'}</p> */}
      </div>
      <div className="flex justify-center items-center m-4">
        <table className="border border-red-500">
          {products.length != 0 && (
            <thead className="border-b">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
          )}
          <tbody className="m-2 bg-white ">
            {products.map((product) => {
              return (
                <tr key={product._id} className="even:bg-gray-200">
                  <td className="p-1">{product._id.slice(-8)}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td className="p-2">{product.createdAt}</td>
                  <td className="p-2">{product.updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
