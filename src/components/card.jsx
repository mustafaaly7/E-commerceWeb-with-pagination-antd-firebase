import { Image } from "antd";







function Card({ product }) {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <Image
        preview={false}
          width={200}
          src={product.thumbnail}
        />
        <div className="mt-4 w-full text-center">
          <h3 className="text-gray-500 text-x font-semibold tracking-widest title-font mb-1">
            {product.category}
          </h3>
          <h2 className="text-gray-900 title-font text-2xl font-medium font-bold">
            {product.title}
          </h2>
          <p className="mt-1 font-bold text-x">${product.price}</p>
        </div>
      </div>





    </>
  )

}

export {
  Card
}