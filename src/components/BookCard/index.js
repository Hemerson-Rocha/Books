import './BookCard.css'

const BookCard = ({book}) => {
    let opacity = '100'
    book.quantidade <= 0 
        ?opacity = '25' 
        :opacity = '100';

    return (
        <div className="bookCard card border-0 mb-5" style={{width: '17rem'}}>
            <img src={book.imagem} className={`card-img-top opacity-${opacity}`} alt={book.alt} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="nameBook card-title text-center fw-bold">{book.titulo}</h5>
                <h5 className="card-title text-center text-muted">{book.autor}</h5>
                <p className="price card-text text-center fs-4 fw-bold">{book.preco.toFixed(2)}</p>
                <div className="tags d-flex flex-wrap gap-2 opacity-">
                    <span className="text-muted  px-1">{book.categoria}</span>
                </div>
            </div>
        </div>
    )
}

export default BookCard