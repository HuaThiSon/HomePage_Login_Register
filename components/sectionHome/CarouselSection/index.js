import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { carouselSectionData } from "../../../data/carouselSectionData";
import {
  HeroMain,
  HeroWrap,
  Col,
  TextWrap,
  ButtonWrap,
  LinkBtn,
} from "./styles";
const CarouselSection = () => {
  return (
    <>
      <HeroMain id="Home">
        <HeroWrap>
          <Col>
            <Carousel>
              {carouselSectionData.map((carousel) => {
                return (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={carousel.image}
                      alt={carousel.alt}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col>
            <TextWrap>
              <h4>Screen Your Future Tenants</h4>
              <h3>HS House</h3>
              <p>
              Get instant access to tenant screening reports with a prospective tenant’s credit and background check, rental eviction report and application with our tenant screening service. All are completely free for landlords, property managers and agents.
              </p>
              <ButtonWrap>
                <LinkBtn to="/Blog" primary="true">
                  Read More
                </LinkBtn>
                <LinkBtn to="/Product">Read More</LinkBtn>
              </ButtonWrap>
            </TextWrap>
          </Col>
        </HeroWrap>
      </HeroMain>
    </>
  );
};

export default CarouselSection;
