import React from "react";
import axios from "axios";
import { DropDown, ShopListDiv, ShopListWrapper } from "./styledCollection";
import DetailsView from "./DetailsView";
import ShopGallery from "./ShopGallery";

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shops: [],
      selectedShop: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await axios.get("shops.json");

    this.setState({
      shops: response.data.shops,
      selectedShop: response.data.shops[0],
      isLoading: false
    });
  }

  renderSelects() {
    return this.state.shops.map(shop => (
      <option key={shop.id} value={shop.id}>
        {shop.title}
      </option>
    ));
  }

  handleShopSelect(e) {
    const selectedShop = this.state.shops.find(
      shop => shop.id.toString() === e.target.value
    );
    this.setState({
      selectedShop
    });
  }

  render() {
    return (
      <ShopListWrapper>
        <ShopListDiv>
          <p>Выберите магазин из списка</p>
          <DropDown onChange={this.handleShopSelect.bind(this)}>
            <option key="initial" value="">
              Выберите магазин
            </option>
            {this.renderSelects()}
          </DropDown>
          <DetailsView
            isLoading={this.state.isLoading}
            shop={this.state.selectedShop}
          />
        </ShopListDiv>
        <ShopGallery isLoading={this.state.isLoading} />
      </ShopListWrapper>
    );
  }
}

export default ShopList;
