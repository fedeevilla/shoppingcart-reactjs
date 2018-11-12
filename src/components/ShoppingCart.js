import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart, removeAllFromCart, addToCart, deleteQtyFromItem } from '../actions'
import { connect } from 'react-redux';
import { min_amount } from './../constants'


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({ cart, removeFromCart, removeAllFromCart, addToCart, deleteQtyFromItem }) => {
  const total = cart.reduce((sum, product) => parseFloat(sum) + parseFloat(product.price * product.qty), 0);
  const items = cart.reduce((sum, product) => parseFloat(sum) + parseFloat(product.qty), 0);

  return (

    <Panel header="Shopping Cart">
      <Table>
        <thead>
          <tr>
            <td colSpan="5" style={styles.footer}>
              <h3>Shopping Cart</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={product.id} style={styles.cart}>
              {product.qty === 0 ? removeFromCart(index):''}
              <td>{product.qty}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>(${parseFloat(product.price * product.qty)})</td>
              <td className="text-right">
                <Button bsSize="xsmall" bsStyle="success" onClick={() => addToCart(product)}><Glyphicon glyph="plus" /></Button>
                <Button bsSize="xsmall" bsStyle="warning" onClick={() => deleteQtyFromItem(product)}><Glyphicon glyph="minus" /></Button>
                <Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(index)}><Glyphicon glyph="trash" /></Button>
              </td>
            </tr>

          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" style={styles.footer}>
              Total: ${total} - ({items} items)
            </td>
          </tr>

          <tr>
            <td colSpan="3" style={styles.footer}>
              <Button bsStyle="success" role="button" disabled={total < min_amount} >{total < min_amount ? `$${min_amount - total} left ` : `Buy `}<Glyphicon glyph="shopping-cart" /></Button>
            </td>
            <td colSpan="2" style={styles.footer}>
              <Button bsStyle="danger" role="button" disabled={items === 0} onClick={() => removeAllFromCart()}>Delete <Glyphicon glyph="trash" /></Button>
            </td>
          </tr>

        </tfoot>
      </Table>
    </Panel >
  )
}



const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {

  return {
    removeFromCart(index) {
      dispatch(removeFromCart(index));
    },
    removeAllFromCart() {
      dispatch(removeAllFromCart());
    },
    addToCart(product) {
      dispatch(addToCart(product));
    },
    deleteQtyFromItem(product) {
      dispatch(deleteQtyFromItem(product));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
