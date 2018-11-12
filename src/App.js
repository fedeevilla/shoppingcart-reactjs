import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Shopping Cart
              </Typography>
              </Toolbar>
            </AppBar>
          </Row>
        </Grid>
        <Grid>
          <Row >
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
