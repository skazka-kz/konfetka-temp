import React from "react";
import {
  BlackFakeText,
  CenteredCell,
  DetailsTable,
  GreyFakeText,
  OrangeFakeText,
  GreySpan
} from "./styledCollection";

import locSymbol from "../../../static/location.png";
import timeSymbol from "../../../static/time.png";

const DetailsView = props => {
  if (props.isLoading) {
    return [
      <OrangeFakeText key="or"/>,
      <DetailsTable key="ora">
        <tbody>
          <tr>
            <CenteredCell>
              <img src={locSymbol} alt="Location" />
            </CenteredCell>
            <td>
              <address>
                <BlackFakeText />
                <GreyFakeText />
              </address>
            </td>
          </tr>
          <tr>
            <CenteredCell>
              <img src={timeSymbol} alt="Время работы:" />
            </CenteredCell>
            <td>
              <address>
                <BlackFakeText />
                <GreyFakeText />
              </address>
            </td>
          </tr>
        </tbody>
      </DetailsTable>
    ];
  } else {
    return [
      <h1 key="or">{props.shop.title}</h1>,
      <DetailsTable key="ora">
        <tbody>
        <tr>
          <CenteredCell>
            <img src={locSymbol} alt="Location" />
          </CenteredCell>
          <td>
            <address>
              {props.shop.addressOne}
              <br/>
              <GreySpan>{props.shop.addressTwo}</GreySpan>

            </address>
          </td>
        </tr>
        <tr>
          <CenteredCell>
            <img src={timeSymbol} alt="Время работы:" />
          </CenteredCell>
          <td>
            <address>
              Время работы:
              <br/>
              <GreySpan>{props.shop.openingTimes}</GreySpan>
            </address>
          </td>
        </tr>
        </tbody>
      </DetailsTable>
    ];
  }
};

export default DetailsView;
