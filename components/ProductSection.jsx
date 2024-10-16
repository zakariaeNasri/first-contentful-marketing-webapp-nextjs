import _ from "lodash";
import ProductCardComponent from "./ProductCardComponent";
const ProductSection = (props) => {
  const id = _.get(props, "id");
  const fields = _.get(props, "fields");
  const title = _.get(fields, "title");
  const products = _.get(fields, "products");

  if (!fields) {
    return "";
  }
  return (
    <div className="">
      {/* {JSON.stringify(products)} */}
      <div className="bg-red-100x flex flex-col space-y-8 p-20 border-2 rounded-md shadow-md">
        <h2 className="font-bold text-2xl text-center">{title}</h2>

        {Array.isArray(products)
          ? products.map((product, productIndex) => {
              const contentType = _.get(product, "sys.contentType.sys.id");
              const productId = _.get(product, "sys.id");
              const fields = _.get(product, "fields");
              return (
                <ProductCardComponent
                  productIndex={productIndex}
                  key={productId}
                  id={productId}
                  fields={fields}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ProductSection;
