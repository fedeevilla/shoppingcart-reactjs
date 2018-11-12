import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../actions'
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    heigth: '350px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = ({ products, addToCart }) => {

  return (
    <div style={styles.products}>
      {products.map(product =>
        <div className="thumbnail" style={styles.product} key={product.id}>

          {<img alt="example" src={product.images[0].src} />}
          <div className="caption">
            <h5>{product.name}</h5>
            <p>
              <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.price <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
            </p>
          </div>
        </div>

      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
