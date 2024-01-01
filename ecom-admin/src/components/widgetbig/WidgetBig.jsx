import "./widgetBig.css";

export default function WidgetBig() {
  const Button = ({ type }) => {
    return <button className={"widgetBigButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetBig">
      <h3 className="widgetBigTitle">Latest Transactions </h3>
      <table className="widgetBigTable">
        <tr className="widgetBigTr">
          <th className="widgetBigTh">Customer</th>
          <th className="widgetBigTh">Date</th>
          <th className="widgetBigTh">Amount</th>
          <th className="widgetBigTh">Status</th>
        </tr>
        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img
              src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className="widgetBigimg"
            />
            <span className="widgetBigName">Jack Snyder</span>
          </td>
          <td className="widgetBigDate">17 May 2022</td>
          <td className="widgetBigAmount">&#8377; 1545.00</td>
          <td className="widgetBigStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img
              src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className="widgetBigimg"
            />
            <span className="widgetBigName">Jack Snyder</span>
          </td>
          <td className="widgetBigDate">17 May 2022</td>
          <td className="widgetBigAmount">&#8377; 1545.00</td>
          <td className="widgetBigStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img
              src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className="widgetBigimg"
            />
            <span className="widgetBigName">Jack Snyder</span>
          </td>
          <td className="widgetBigDate">17 May 2022</td>
          <td className="widgetBigAmount">&#8377; 1545.00</td>
          <td className="widgetBigStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img
              src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className="widgetBigimg"
            />
            <span className="widgetBigName">Jack Snyder</span>
          </td>
          <td className="widgetBigDate">17 May 2022</td>
          <td className="widgetBigAmount">&#8377; 1545.00</td>
          <td className="widgetBigStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
