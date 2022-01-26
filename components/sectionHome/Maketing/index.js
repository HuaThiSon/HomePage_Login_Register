import React from "react";
import Zoom from "react-reveal/Zoom";
import {
  MarketingSection,
  MarketingHeading,
  MarketingWrap,
  Img,
  MarketingContent,
} from "./styles";
const Marketing = () => {
  return (
    <>
      
        <MarketingSection id="/Marketing">
          <MarketingHeading>Marketing</MarketingHeading>
          <MarketingWrap>
            <Img
              src="https://xaylapanthinh.com/wp-content/uploads/2020/06/nha-2-tang-mat-tien-534x400.jpg"
              alt="#"
            />
            <Zoom>

            <MarketingContent>
              <h3>Write enticing marketing copy</h3>
              <h5>Vacancy Tip:</h5>
              <p>
                Nothing grabs attention better than the promise of a sale,
                discount, or other financial perks, so consider including that
                in your marketing copy headline. Examples include $100 off the
                first month’s rent, free cable for six months, or a $100 gift
                card upon signing a lease agreement. Although it may seem
                counterintuitive to put up some of your own money or slash rent,
                it is a small price to pay to get the attention of prospective
                tenants and motivate them to choose your rental property over
                another.
              </p>
            </MarketingContent>
            </Zoom>
          </MarketingWrap>
        </MarketingSection>
    </>
  );
};

export default Marketing;
