import React from "react";
//import { useParams, useHistory, Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";

export default function Detail() {

  const videogame = useSelector((state) => state.videogame);

  return (
    <div>
      <div>
        <div>
          <img
            src={videogame.background_image}
            alt={`${videogame.background_image}.jpg`}
          />
        </div>

        <h2> {videogame.name} </h2>

        <div>Platform: {videogame.platform}</div>

        <div>Region: {videogame.region}</div>

        <div>
          Digital key:
          <div>This is a digital edition of the product (CD-KEY)</div>
        </div>

        <div>OS: {videogame.os}</div>

        <div>
          <div>
            Price:
            {videogame.price}
            <button>Add to cart</button>
          </div>
          <div>
            Premium price:
            {videogame.price}
            <button>Get premium account pay less!</button>
          </div>
        </div>

        <h2>Screenshots Gallery</h2>

        <iframe title="Trailer" src={videogame.trailer}></iframe>
        <div>
          <div>
            <div>1 / 6</div>
            <img src={videogame.short_screenshots[1]} alt="Screenshot1.jpg" />
          </div>

          <div>
            <div>2 / 6</div>
            <img src={videogame.short_screenshots[2]} alt="Screenshot2.jpg" />
          </div>

          <div>
            <div>3 / 6</div>
            <img src={videogame.short_screenshots[3]} alt="Screenshot3.jpg" />
          </div>

          <div>
            <div>4 / 6</div>
            <img src={videogame.short_screenshots[4]} alt="Screenshot4.jpg" />
          </div>

          <div>
            <div>5 / 6</div>
            <img src={videogame.short_screenshots[5]} alt="Screenshot5.jpg" />
          </div>

          <div>6 / 6</div>
          <img src={videogame.short_screenshots[6]} alt="Screenshot6.jpg" />

          <a onclick="plusSlides(-1)" href="<">❮</a>
          <a onclick="plusSlides(1)" href=">">❯</a>

          <div>
            <p id="caption"></p>
          </div>

          <div>
            <div>
              <img
                src={videogame.short_screenshots[1]}
                onclick="currentSlide(1)"
                alt="Screenshot1.jpg"
              />
            </div>
            <div>
              <img
                src={videogame.short_screenshots[2]}
                onclick="currentSlide(2)"
                alt="Screenshot2.jpg"
              />
            </div>
            <div>
              <img
                src={videogame.short_screenshots[3]}
                onclick="currentSlide(3)"
                alt="Screenshot3.jpg"
              />
            </div>
            <div>
              <img
                src={videogame.short_screenshots[4]}
                onclick="currentSlide(4)"
                alt="Screenshot4.jpg"
              />
            </div>
            <div>
              <img
                src={videogame.short_screenshots[5]}
                onclick="currentSlide(5)"
                alt="Screenshot5.jpg"
              />
            </div>
            <div>
              <img
                src={videogame.short_screenshots[6]}
                onclick="currentSlide(6)"
                alt="Screenshot6.jpg"
              />
            </div>
          </div>
        </div>

        <div>
          Description:
          <div>{videogame.description}</div>
        </div>

        <div>
          System requirements:
          <div>{videogame.system_requirements}</div>
        </div>
      </div>
    </div>
  );
}
