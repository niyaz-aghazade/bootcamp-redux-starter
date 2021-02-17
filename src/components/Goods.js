import React, { Component } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import store from '../redux/store';
class Goods extends Component {
  state = {
    goods: []
  }

  componentDidMount() {
    this.setState({
      goods: store.getState().goods
    })
  }

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;