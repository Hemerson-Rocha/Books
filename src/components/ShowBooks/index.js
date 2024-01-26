import { useEffect, useState } from "react"
import BookCard from "../BookCard"

const ShowBooks = ({seach, setPriceAllBooks}) => {

    const [books, setBooks] = useState([])

    const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    useEffect(() => {
        (async() => {
            const res = await fetch(url)
            const data = await res.json()
            // setBooks(data)

            const discount = 0.3
            setBooks(data.map((book) => {
                return {...book, preco: book.preco - (book.preco * discount)}
            }))
        })()
    }, [])

    const resultFilter = books.filter((book) => seach === book.categoria.toUpperCase())
    const priceAllBooks = books.reduce((acc, book) => acc + book.preco, 0)

    setPriceAllBooks(priceAllBooks)
    // console.log(`total é ${priceAllBooks}`);

    return (
        <main className="d-flex flex-wrap justify-content-around gap-5 mx-5">
            {seach === 'ORDENAR POR PREÇO' && 
                books.sort((a, b)=> a.preco - b.preco).map((book) =>
                    <BookCard
                        key={book.titulo}
                        book={book}  
                        priceAllBooks={priceAllBooks}
                    />
                )
            }

            {seach === 'LIVROS DISPONÍVEIS' && 
                books.map((book) =>
                    book.quantidade > 0 &&
                        <BookCard
                            key={book.titulo}
                            book={book} 
                            priceAllBooks={priceAllBooks}
                        />
                )
            }

            {seach === '' &&  
                books.map((book) =>
                    <BookCard
                        key={book.titulo}
                        book={book} 
                        priceAllBooks={priceAllBooks}
                    />
                )
            }

            {resultFilter.map((book) =>
                <BookCard
                    key={book.titulo}
                    book={book}  
                    priceAllBooks={priceAllBooks}
                />
                )
            }
        </main>
    )
}

export default ShowBooks