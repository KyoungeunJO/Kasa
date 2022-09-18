import "./Card.css"

function Card({ data }) {

    return(
        <article>
            <h2>{data.title}</h2>
            <img src={data.cover} alt={data.title}/>
        </article>
    )
}

export default Card