import React, { Component } from 'react';
import './mockup.css';
import {Link} from  'react-router-dom';
class HomePage extends Component {
    render() {
        return(
            <div>
              <h1 align="center">Hawaii Emergency Alert System</h1>
                <div class="left">
                  <h2 align = "left"><a name = "ManMade">Man Made Disaster</a></h2>

                  <figure>
                    <img src="https://www.iconexperience.com/_img/v_collection_png/512x512/shadow/ballistic_missile.png" width="100"></img>
                    <h4>Ballistic Missile</h4>
                    </figure>
                </div>

                <div class="right">
                  <h2><a name = "Natural">Natural Disaster</a></h2>

                  <figure>
                    <img src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-01-512.png" width="100"></img>
                    <h4>Tsunami</h4>
                  </figure>

                  <figure>
                    <img src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_TornadoGradient.png" width="100"></img>
                    <h4>Hurricane</h4>
                  </figure>
                </div>

            </div>
    );
    }
}

export default HomePage;