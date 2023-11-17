import React, { Component } from "react";
import logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

class ExploreYourMusic extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img src={logo} alt="SpotCry" />
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/package">Package</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="Hero">
            <h1>Explore Your Music</h1>
            <p>
              Feel the beat, dive into the lyrics, and let music guide your path.
              We're here to celebrate the magic that only music can provide.
              Let's create unforgettable sonic memories together.
              Hit play and be part of this unique symphony.
            </p>
            <button className="btn">Learn More</button>
          </section>
        </main>
      </div>
    );
  }
}

export default ExploreYourMusic;