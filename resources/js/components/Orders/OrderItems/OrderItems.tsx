// React
import React from 'react'
import {IProduct} from '../../Products/IProducts'
import {moneyFormatter} from '../../../utils'

const OrderItems: React.FC = ({items, onChange}: any) => {
    if (!items.length) {
        return null
    }
    return (
        items.map((item: IProduct) => {
            return (
                <div key={item.id + item.nameRu}
                     className='row mb-2'>
                    <div className="col-2">
                        <img src={item.image ||
                        '/imgs/placeholder-product-image.png'}
                             alt={item.nameRu}/>
                    </div>
                    <div className="col-4">
                        {item.nameRu}
                    </div>
                    <div className="col-2">
                        <input data-id={item.id} min={1}
                               onChange={onChange} type="number"/>
                    </div>
                    <div className="col-3">
                        {moneyFormatter(item.price)}
                    </div>
                    <div className="col-1">
                        del
                    </div>
                </div>
            )
        })
    )
}

export default OrderItems
