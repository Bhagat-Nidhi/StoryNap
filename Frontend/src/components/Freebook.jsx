import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch('/list.json')
            .then(response => response.json())
            .then(data => {
                const filtered = data.filter(item => item.category === "Free");
                setFilterData(filtered);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div className="max-w-screen-2xl mx-auto md:px-20 px-4 ">
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit obcaecati reprehenderit quidem eos beatae itaque asperiores! Consectetur, labore nam eius qui rem architecto laborum ipsam saepe pariatur distinctio fugit.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map(item => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
}

export default Freebook;
