import SingleItem from "./SingleItem";

const ItemList = ({title}) => {
  return (
    <div>
            <div className="item-list">
              <div className='item-list__header'>
                <h1>{title} Populares</h1>
                <span className='mostrar__link'>Mostrar tudo</span>
              </div>
            
              <div className="item-list__container">
      
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
      
            </div>
      
            </div>
    </div>
  )
}

export default ItemList