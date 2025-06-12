export default function Card({image, description, title}) {
    return (
      <>     
        <img src={image} alt="components image" />
        <h2 >{title}</h2>
        <p >{description}</p>
      </>
    )
}