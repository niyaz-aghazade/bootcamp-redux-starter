import React, { PureComponent } from "react";

import "../styles.css";

import {connect} from 'react-redux';
import {addGoodToCart} from '../redux/actions';

class GoodsItem extends PureComponent {
  render() {
    const { title, description, price, id, addGoodToCart } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button
          onClick={() => addGoodToCart(id)}
          className="goods-item__add-to-card">
            Add to cart
        </button>
      </div>
    );
  }
}

// запись в виде функции
// const mapDispatchToProps = (dispatch) => ({
//   addGoodToCart: (id) => {
//     dispatch(addGoodToCartAction(id));
//   }
// });

// запись в виде объекта
const mapDispatchToProps = {
  addGoodToCart
}

export default connect(null, mapDispatchToProps)(GoodsItem);