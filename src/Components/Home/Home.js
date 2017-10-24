import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="home_bg_img">
        <img alt="background_img" src="assets/brooke-lark-254998.jpg" />
        <section className="sans home_container container">
          <h1 className="">Healthy Meal Planning Made Easy</h1>
          <p className="helvetica text_large">
            Meal planning can be tough, we can make it easier. Simply add each
            item from a recipe, we'll track the amounts of each and compile a
            shopping list for you. Download the spreadsheet, shop, and you're
            done.
          </p>
          <div className="">
            <form className="">
              <div className="">
                <div className="ls">
                  <Button bsStyle="primary" bsClass="btn wide" bsSize="large">
                    <h3>Try a free meal plan</h3>
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <p className="">
            <i>
              This website is a portfolio piece, created to highlight React
              skills. <br />
              Logging in isn't required, but doing so will allow you to track
              previous shopping lists.
            </i>
          </p>
        </section>
      </div>
    );
  }
}
