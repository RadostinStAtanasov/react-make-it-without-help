import Card from "./Card"

export default function Cards({ cards }) {
    return (
        <>
            <ul id="concepts">
                {cards.map((card, index) => (
                    <li className="concept">
                        <Card 
                            key={index}
                            title={card.title} 
                            description={card.description} 
                            image={card.image}/>
                    </li>
                ))}
            </ul>
        </>
    )
}