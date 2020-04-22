import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App main-container">
      <Header />
      <div className="responsive-table data-table">
        <table align="center" width="100%">
          <tbody>
            <tr>
              <td className="icon"><img src="/images/arrow.svg" alt="arrow" width="80" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">4 mins ago</div></td>
              <td className="price"><div className="price-box"> &#36;2.50 </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/arrow.svg" alt="arrow" width="80" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">8 mins ago</div></td>
              <td className="price"><div className="price-box"> &#36;2.50 </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/thumb.svg" alt="arrow" width="43" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">12 mins ago</div></td>
              <td className="likes"><div className="likes-box"> <strong>84</strong>
                  <div className="text"> Likes </div>
                </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/heart.svg" alt="arrow" width="35" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">14 mins ago</div></td>
              <td className="followers"><div className="followers-box"> <strong>227</strong>
                  <div className="text"> Followers </div>
                </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/heart.svg" alt="arrow" width="35" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">12 mins ago</div></td>
              <td className="followers"><div className="followers-box"> <strong>226</strong>
                  <div className="text"> Followers </div>
                </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/arrow.svg" alt="arrow" width="80" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">4 mins ago</div></td>
              <td className="price"><div className="price-box"> &#36;2.50 </div></td>
            </tr>
            <tr>
              <td className="icon"><img src="/images/arrow.svg" alt="arrow" width="80" className="icon" /></td>
              <td className="content"><div className="info-text"> <strong>User Name</strong> just tipped you! </div>
                <div className="time">8 mins ago</div></td>
              <td className="price"><div className="price-box"> &#36;2.50 </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
