import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Rich Dad Poor Dad Book by Robert Kiyosaki and Sharon Lechter"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="56794237"
            title="
            LG WM3499HVA - 2.3 cu.ft SMART WI-FI ENABLED ALL-IN-ONE WASHER/DRYER"
            price={339.9}
            image="https://images-na.ssl-images-amazon.com/images/I/512GybA0m6L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="87868492"
            title="
            Fitbit Charge 3 Fitness Activity Tracker Special Edition"
            price={199.9}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
            rating={3}
          />
          <Product
            id="76452974"
            title="
           Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.9}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobileX2$.jpg"
            rating={5}
          />
          <Product
            id="34123477"
            title="
          
            New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
            price={999}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54252738"
            title="Walsh WSR31TS1 Compact Refrigerator, Dual Door Fridge, Adjustable Mechanical Thermostat with True Freezer, Reversible Doors,3.1 Cu.Ft, Stainless Steel Look"
            price={252.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81e3S1Q2xHL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="32136651"
            title="
            Music Alley Classical Guitar 6 String Junior, Right, Natural (MA34-N)"
            price={49.9}
            image="https://images-na.ssl-images-amazon.com/images/I/81tQhEEtiEL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="09897221"
            title="
            Big and Tall Office Chair 400lbs Wide Seat Mesh Desk Chair Massage Rolling Swivel Ergonomic Computer Chair with Lumbar Support Adjustable Arms Task Chair"
            price={132}
            image="https://images-na.ssl-images-amazon.com/images/I/7151gMbWRmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="64271812"
            title='
            Kathy Ireland Mulholland 72" High Torchiere Floor Lamp'
            price={25}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZPm5TPvKL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="51357145"
            title=" MaoGoLan Giant Teddy Bear Big Stuffed Animals Plush Soft Giant Stuffed Bear for Girls"
            price={43.69}
            image="https://images-na.ssl-images-amazon.com/images/I/91pHxrSxW2L._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="61486113"
            title="
            HP 27f 27-inch 4K-UHD (3840 x 2160) Height Adjustable IPS Monitor with HDMIx2, VGA, AMD Free Sync, 300 nits - 5ZP66AA (Black)"
            price={598.9}
            image="https://images-na.ssl-images-amazon.com/images/I/71V2rgkb2rL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
