import "../main/Main.scss"
import data from "../../helpers/data"
import Card from "./Card"





const Main = () => {
  return(

      <div className="card-container">

{
      data.map((item) =>{
const {id, title, date, desc, image } = item
return(
<Card id={id} title={title} date={date} desc={desc} image={image} />
)

      })
}

      </div>
  )
}

export default Main