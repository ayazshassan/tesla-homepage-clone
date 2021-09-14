import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpg";
import ModelS from "./assets/Desktop-ModelS.jfif";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__itemContainer">
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
          first
        ></Item>

        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM NOW"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        ></Item>

        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM NOW"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        ></Item>
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM NOW"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        ></Item>

        <Item
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>

        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>

        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
        ></Item>
      </div>
    </div>
  );
}

export default App;
