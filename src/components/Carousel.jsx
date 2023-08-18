import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Component } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default class Carousel extends Component {
  render() {
    const carouselImages = [
      { src: "https://pmu.edu/images/homepage/placement1.jpg", title: "" },
      { src: "https://pmu.edu/images/homepage/home-banner-3.png", title: "" },
      {
        src: "https://pmu.edu/images/homepage/home-banner-2.png",
        title: "GREEN, CLEAN AND SERENE CAMPUS",
      },
      {
        src: "https://pmu.edu/images/homepage/home-banner-5.png",
        title: "Industry-Ready Programs",
      },
      {
        src: "https://pmu.edu/images/homepage/home-banner-4.png",
        title: "Encouraging Extra-curricular Activities",
      },
      {
        src: "https://pmu.edu/images/homepage/para.jpg",
        title: "NATIONAL LEVEL PARA VOLLEYBALL CHAMPIONSHIP 2023",
      },
      {
        src: "https://pmu.edu/images/homepage/home-banner-1.png",
        title: "All-round Personality Development",
      },
    ];
    return (
      <div className="carousel">
        <MDBCarousel showControls showIndicators>
          {carouselImages.map((image, index) => {
            return (
              <MDBCarouselItem
                key={index}
                className="w-100 d-block"
                itemId={index + 1}
                src={image.src}
                alt="..."
              >
                <h2>{image.title}</h2>
              </MDBCarouselItem>
            );
          })}
        </MDBCarousel>
      </div>
    );
  }
}
