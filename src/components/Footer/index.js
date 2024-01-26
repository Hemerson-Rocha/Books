import './Footer.css'

const Footer = ({priceAllBooks}) => {
    return (
        <footer className="footer text-light text-center">

            <div className="booksAvailable fs-2 py-2 mb-3 fw-bold">
                <p>Todos os livros disponíveis por R$ <span id="valor">{parseInt(priceAllBooks).toFixed(2)}</span></p>
            </div>
            <div className="byCreator py-5 fw-medium">
                <p>Desenvolvido por Hemerson Rocha</p>
            </div>
        </footer>
    )
}

export default Footer