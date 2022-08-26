import React, { useEffect, useState } from "react";
import "./Body.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltLeft ,faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
const photos = [
  {
    id: 1,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/h4-rev-img-1.jpg",
  },
  {
    id: 2,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/h4-rev-img-2.jpg",
  },
  {
    id: 3,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/h4-rev-img-3.jpg",
  },
];
const logoPartner = [
  {
    id: 1,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/client-img-1.png",
  },
  {
    id: 2,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/client-img-2.png",
  },
  {
    id: 3,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/client-img-3.png",
  },
  {
    id: 4,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/client-img-4.png",
  },
  {
    id: 5,
    src: "https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/client-img-5.png",
  },
];
const photoItem=[
  {
    id:1,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/p-list-img-12.jpg"
  },
  {
    id:2,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/p-list-img-13.jpg"
  },
  {
    id:3,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/p-list-img-14.jpg"
  },
  {
    id:4,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/p-list-img-15.jpg"
  },
  {
    id:5,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/p-list-img-16.jpg"
  }
]
const photoIntroduce=[
  {
    id:1,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/a-list-img-1.jpg"
  },
  {
    id:2,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/a-list-img-2.jpg"
  },
  {
    id:3,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/a-list-img-3.jpg"
  },
  {
    id:4,
    src:"https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/a-list-img-4.jpg"
  }
]
function Body() {
  const [image] = useState([" active", "", ""]);
  const [textProduct]=useState(["Office space","Luxurios villa","Modern houses","Lux Skycraper","Modernt apartment"])
  const [count, setCount] = useState(0);
  const [click,setClick]=useState(0)
  const [number,setNumber]=useState(1)
  function handleCount() {
    setCount(count + 1);
    image[count - 1] = " ";

    if (count === 3) {
      setCount(0);
      image[0] = "active";
    } else {
      image[count] = "active";
    }
  }
  let timer
  useEffect(() => {
   timer = setInterval(handleCount, 2000);
    return () => clearInterval(timer);
  }, [count]);
  function handleClickLeft()
  {
    setClick(click-70)
    setNumber(number-1)
    if(click<=0)
    {
      setClick(210)
      setNumber(4)
    }
  }
  function handleClickRight()
  {
   
    setClick(click+70)
    setNumber(number+1)
    if(click>=210)
    {
      setClick(0)
      setNumber(0)
    }
    
  }
  return (
    <div>
      <section className="banner">
        <div className="banner-slide">
          {photos.map((photo, index) => (
            <div className={`image-banner ${image[index]}`} key={photo.id}>
              <span className="title-heading">
                <h1 className="h1-banner"> build a great tomorrow for all</h1>
                <h4 className="h4-banner">
                  Our idea is to create a brighter future for new generation .We
                  design the perfect residential and business building base on
                  modern architecture concept
                </h4>
                <button className="btn-banner">Make an enquiry</button>
              </span>
              <img src={photo.src} alt="" />
              <span className="icon-banner">
                <FontAwesomeIcon icon={faFacebookF} className="iconBanner" />
                <FontAwesomeIcon icon={faInstagram} className="iconBanner" />
                <FontAwesomeIcon icon={faTwitter} className="iconBanner" />
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="logoPartner">
        <div className="logo-partner">
          {logoPartner.map((logoPartners, index) => (
           <div className="image-logo">
            <div className="img-logo-front" key={logoPartners.index}>
                  <img src={logoPartners.src} alt="" />

                  <div className="img-logo-back" key={logoPartners.index}>
                    <img src={logoPartners.src} alt="" />
                  </div>
                </div>
           </div>
            
            
          ))}
        </div>
      </section> 
      <section className="product">
            <div className="product-item">
              <div className="product-item-text">
                <h3>Bunni Group is the largest residential development and sales agency </h3>
              </div>
              {photoItem.map((photoItems,index)=>
                <div className="productItem" key={photoItems.id}>
                  <img src={photoItems.src} alt="" className="img-product"/>
                  <span className="text-item">{textProduct[index]}</span>                 
                </div>
              )}
             
            </div>
      </section>
      <section className="backgroundMid">
        <div className="background-mid">
                <img src=" https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/h4-img-1.jpg" className="img-background"></img>
                <div className="textButtonBackground">
                    <span className="text-background">A fresh start with our houses</span>
                    <button className="btn-background">View more</button>
                </div>
        </div>
      </section>
      <section className="textMid">
        <div className="text-mid">
          <div className="text-mid-child"> 
                <h1>01</h1>
                <h3>Planning stage</h3>
                <h6>Lorem ipsum dolor sit amet, conse quat reprimique eu mel. Ne sed muner di ceret. Explicari moderat</h6>
          </div>
          <div className="text-mid-child"> 
                <h1>02</h1>
                <h3>Development</h3>
                <h6>Lorem ipsum dolor sit amet, conse quat reprimique eu mel. Ne sed muner di ceret. Explicari moderat</h6>
          </div>
          <div className="text-mid-child"> 
                <h1>03</h1>
                <h3>Excution phase</h3>
                <h6>Lorem ipsum dolor sit amet, conse quat reprimique eu mel. Ne sed muner di ceret. Explicari moderat</h6>
          </div>
          <div className="text-mid-child"> 
                <h1>04</h1>
                <h3>New way of living</h3>
                <h6>Lorem ipsum dolor sit amet, conse quat reprimique eu mel. Ne sed muner di ceret. Explicari moderat</h6>
                
          </div>
        </div>
      </section>
      <section className="productIntroduce">
          <div className="product-introduce">
            <div className="text-product-introduce">
               <h1>Modern home with great interior design</h1>
              <div className="text-introduce-heading">
                <div>
                  <h4>Property size:130 m2</h4>
                  <h4>Structure:Two Bedrooms</h4>
                  <h4>Accomodation:Furnished</h4>
                  <h4>Rent between:€900-1500</h4>
                </div>
                <div>
                  <h4>Heating:Floor heating</h4>
                  <h4>Property type:Townhome</h4>
                  <h4>Parking spaces:1 space</h4>
                </div>
              </div>
            </div>
            <div className="imgIntroduce">
              <div className="img-introduce" style={{right:`${click}%`}} >
                {photoIntroduce.map((photoIntroduces,index)=>
                    <div className="img-introduce-slide" key={index}>
                        <img src={photoIntroduces.src}></img>
                    </div>
                  
                  )}
              </div>
              <div className="icon-introduce">
                    <button className="iconIntroduceLeft" onClick={handleClickLeft}><FontAwesomeIcon icon={faLongArrowAltLeft}/></button>
                    <button className="iconIntroduceRight" onClick={handleClickRight} ><FontAwesomeIcon icon={faLongArrowAltRight}/></button>  
                    <h3 className="number-introduce">0{number}/04</h3>
                </div> 
            </div>
          </div>
      </section>
   
    </div>
  );
}

export default Body;
