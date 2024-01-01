import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../Dummydata";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetBig from "../../components/widgetbig/WidgetBig";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetBig />
      </div>
    </div>
  );
}
