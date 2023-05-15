const isProduct = (Product) => {
    return Product.map((data, i) => {
        <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/400/255/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.price}</div>
                </div>
            </div>
        </div>
    })
}

const noProduct = () => {
    return (
        <div> No Product Available</div>
    )
}

const Product = ({ Product }) => {
    return !Product ? noProduct : isProduct(Product)
}
export default Product
