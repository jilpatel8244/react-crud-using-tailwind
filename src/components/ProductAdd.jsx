import { useEffect, useState } from "react";

function ProductAdd() {
  const [toggleAddModel, setToggleAddModel] = useState(false);
  const [category, setCategory] = useState([]);
  const [newProductData, setNewProductData] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: 2,
    images: ["https://placeimg.com/640/480/any"],
  });

  const getAllCategory = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/categories");
    let response = await data.json();

    setCategory(response);
  };

  function handleFormData(event) {
    let { name, value } = event.target;

    setNewProductData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const insertProduct = async (event) => {
    event.preventDefault();
    let data = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      body: newProductData,
      headers: {
        "Content-type": "application/json",
      },
    });

    let response = data.json();

    console.log(response);
  };

  return (
    <div className="flex justify-end mx-10 my-3">
      <button
        onClick={() => {
          getAllCategory();
          setToggleAddModel(true);
        }}
        type="button"
        className="bg-blue-500 text-white px-3 py-1.5 rounded-md"
      >
        Add
      </button>

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
              onSubmit={(event) => {
                insertProduct(event);
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
                    value={newProductData.title}
                    onChange={(e) => {
                      handleFormData(e);
                    }}
                    id="name"
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
                    value={newProductData.price}
                    onChange={(e) => {
                      handleFormData(e);
                    }}
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required=""
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
                    value={newProductData.categoryId}
                    onChange={(e) => {
                      handleFormData(e);
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
                    rows="4"
                    value={newProductData.description}
                    onChange={(e) => {
                      handleFormData(e);
                    }}
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
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
