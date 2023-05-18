const isProduct = (products) => {
    return products.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/200" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline">{data.price}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    })
}

const noProduct = () => {
    return (
        <div> No Products Available</div>
    )
}

const ProductList = ({ products }) => {
   return !products ? noProduct() : isProduct(products)
}

export default ProductList
