

export default function Box({ product }) {
  return (
    <div className="bg-white h-[400px] pt-12 pb-10">
      <div className="flex justify-centera align-middle flex-col">
        <img alt={`${product.image}`} src={product.image} className="mx-auto" />

        <h3 className="text-brand-color mt-6 text-lg text-center">
          {product.title}
        </h3>
        <p className="text-[15px] text-gray-400 w-80 text-center">
          {product.description}
        </p>
      </div>
    </div>
  );
}
