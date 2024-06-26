import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let noOfRecordsPerPage = 5;
  let [totalRecords, setTotalRecords] = useState(1);
  const [toggleAddModel, setToggleAddModel] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    categoryId: 2,
    images: ["https://placeimg.com/640/480/any"],
  });
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      let offset = (currentPage - 1) * noOfRecordsPerPage;
      let data = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${noOfRecordsPerPage}`
      );
      let response = await data.json();

      setProducts(response);
      console.log(response);
    };
    getAllProducts();
  }, [currentPage]);

  useEffect(() => {
    const getNoOfRecords = async () => {
      let data = await fetch(`https://api.escuelajs.co/api/v1/products`);
      let response = await data.json();

      setTotalRecords(response.length);
      console.log(response.length);
    };
    getNoOfRecords();
  }, []);

  const getAllCategory = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/categories");
    let response = await data.json();

    setCategory(response);
  };

  const editFormDataHandler = async (event) => {
    console.log(editFormData);
    setEditFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: [event.target.value],
      };
    });
  };

  function fillData(product) {
    console.log(product);
    setEditFormData((prevData) => {
      return {
        ...prevData,
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        categoryId: product.category.id,
      };
    });
  }

  async function updateProduct(event) {
    event.preventDefault();
    let data = await fetch(`https://api.escuelajs.co/api/v1/products/${editFormData.id}`, {
      method: "PUT",
      body: editFormData,
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Created at
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((product, index) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">{product.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.title}
                  </th>
                  <td className="px-6 py-4">{product.category.name}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.creationAt}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        getAllCategory();
                        fillData(product);
                        setToggleAddModel(true);
                      }}
                      type="button"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Current Page {currentPage}
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage === 1 ? true : false}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                disabled={
                  currentPage === Math.ceil(totalRecords / noOfRecordsPerPage)
                    ? true
                    : false
                }
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div
        id="crud-modal"
        aria-hidden="true"
        className={`${
          !toggleAddModel && "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-7 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                type="button"
                onClick={() => {
                  setToggleAddModel(false);
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form
              className="p-4 md:p-5"
              onSubmit={(e) => {
                updateProduct(e);
              }}
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="name"
                    value={editFormData.title}
                    onChange={editFormDataHandler}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={editFormData.price}
                    onChange={(e) => {
                      editFormDataHandler(e);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="categoryId"
                    value={editFormData.categoryId}
                    onChange={(e) => {
                      editFormDataHandler(e);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    {category.map((singleCategory) => {
                      return (
                        <option
                          key={singleCategory.id}
                          value={singleCategory.id}
                        >
                          {singleCategory.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={editFormData.description}
                    onChange={(e) => {
                      editFormDataHandler(e);
                    }}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Edit product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
