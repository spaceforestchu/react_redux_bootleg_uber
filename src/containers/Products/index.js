import React, {Component} from 'react';
import './Products.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Product extends Component {
  render(){
    const { products } = this.props;

    //console.log(JSON.stringify(products.prices));
    let productPrice;

    if(products === null) {
      productPrice = <div></div>
    } else {
      productPrice = products.prices;
    }

    let productPrices = productPrice.map( (product) => {
      return (
        <div
          className='Products-item'
          key={product.product_id}
          >
          <h2>{product.display_name}</h2>
          <h3>{product.estimate}</h3>
        </div>
      )
    })

    return(
      <div className='Products'>
        Hi I am {this.props.params.name}

        <div className='Products-list'>
          {productPrices}
        </div>
        <Link to={'/'}>Go Back To Home</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
});


export default connect(mapStateToProps)(Product);
