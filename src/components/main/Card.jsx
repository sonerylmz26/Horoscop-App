



const Card = ({id,title,date,desc,image}) => {
  return (
    <div key={id} className="cards">
     <div className="title">
      <h1>{title}</h1>
     </div>
<div className="date">
      <h2>{date}</h2>
</div>
<img className="card-img" src={image} alt="" />
<div className="card-over">
      <p>{desc}</p>
</div>
      </div>
  )
}

export default Card