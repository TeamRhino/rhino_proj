import React, { Component } from 'react';
// 1. We need to make a modal for each alert 
// 2. after confirmation of modal go to new page for alert system
// 3. Able to choose what type of alert can send. Text / Siren / ETC
// 4. Final confirmation and 2FA
// 5. Send email message

class HomePage extends Component {
    render() {
        return(
            <div class="ui container"> 
                <h1> Alert System </h1>
                <li>Hurricane Alert</li>
                <li>Missile Alert </li>
            </div>
        );
    }
}

export default HomePage;