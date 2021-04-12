import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
     return (
          <div className='home'>
               <div className="home__container">
                    <img
                         className="home__image"
                         src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg" alt=""></img>
                    
                    <div className="home__row">
                         <Product
                              id="111"
                              title='Samsung Ultra-Wide Monitor 49"'
                              price={1660}
                              image="https://images.samsung.com/is/image/samsung/za-curved-c49j89-lc49j890dkuxen-frontblack-116131161?$720_576_PNG$"
                              rating={5}/>
                         <Product
                              id="222"
                              title='Dyson'
                              price={269.99}
                              image="https://www.hengstyle.com/thumb/w-2000/h-2000/aHR0cHM6Ly93d3cuaGVuZ3N0eWxlLmNvbS9yZXNvdXJjZXMvdXBsb2Fkcy91c2Vycy9qaWhzdWFud3UvMjAyMC8wOS92MTFfYWJzX2V4dHJhXzEwMDBfMS5qcGc="
                              rating={5}
                              />
                    </div>

                    <div className="home__row">
                         <Product
                              id="333"
                              title='A+ Speedup Ruler'
                              price={15.9}
                              image="https://booktest.com.tw/upfiles/201804144117__2018_01_15_17_47_160001-1024.jpg"
                              rating={7}
                         />
                         <Product
                              id="444"
                              title='IPhone 13'
                              price={1999.99}
                              image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000"
                              rating={5}
                         />
                         <Product
                              id="555"
                              title='Airpods Pro MAX'
                              price={333}
                              image="https://static.newmobilelife.com/wp-content/uploads/2020/05/AirPods-Pro.jpg"
                              rating={5}
                         />
                    </div>
                    <div className="home__row">
                         <Product
                              id="666"
                              title='Harley Davidson Road King'
                              price={43500}
                              image="https://di-uploads-pod4.dealerinspire.com/riversideharleydavidson/uploads/2016/10/Road-King-Black-Hills-Gold.png"
                              rating={10}
                         />
                    </div>
               </div>
          </div>
     )
}

export default Home
