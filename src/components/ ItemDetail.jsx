
   
import ItemCounter from "../components/ItemCounter/ItemCounter"


function ItemDetail({productList}) {
  return (
        <div className="detail-container">
          <div className="detail">
            <img src={productList.image} alt="" className="detail-img"/>
            <div className="detail-item">
                <p>{productList.name}</p>
                <p>{productList.price}</p>
                <ItemCounter stock={productList.stock} initial={productList.initial} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
            </div>
          </div>
        </div>
  )
}

export default ItemDetail