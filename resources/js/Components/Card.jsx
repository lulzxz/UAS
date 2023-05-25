import'../App.jsx';

function Card() {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="./img/hae.jpeg" alt="Shoes" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title text-black">Shoes!</h2>
                <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-black">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;