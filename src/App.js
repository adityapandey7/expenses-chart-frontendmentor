import logo from "./images/logo.svg";
import "./App.css";
import data from "./data.json";
import Bar from "./component/Bar";

function App() {


  return (
    <div className="container">
      <div className="expenses-card">
        <div className="expenses-heading">
          <div className="expenses-heading-data">
            <span>My balance</span>
            <h5>$921.48</h5>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="expenses-bar">
          <div className="expenses-bar-title">
            <h4>Spending - Last 7 days</h4>
          </div>
          <div className="bar">
          {data.map((data, index) => {
              return (
                <Bar day={data.day} amount={data.amount} key={index} />
              )
          } )}
            {/* <div className="mon">
              <span className="mon-bar"></span>
              <span className="mon-mon">mon</span>{" "}
            </div>
            <div className="tue">
              <span className="tue-bar"></span>
              <span className="tue-tue">tue</span>
            </div>
            <div className="wed">
              <span className="wed-bar"></span>
              <span className="wed-wed">wed</span>
            </div>
            <div className="thu">
            <span className="thu-bar"></span>
            <span className="thu-thu">thu</span>
            </div>
            <div className="fri">
            <span className="fri-bar"></span>
            <span className="fri-fri">fri</span>
            </div>
            <div className="sat">
            <span className="sat-bar"></span>
            <span className="sat-sat">sat</span>
            </div>
            <div className="sun">
            <span className="sun-bar"></span>
            <span className="sun-sun">sun</span>
            </div> */}
          </div>
          <hr />
          <div className="expenses-bar-details">
            <div className="expenses-bar-details-total">
              <span>Total this month</span>
              <h2>$478.33</h2>
            </div>

            <div className="expenses-bar-details-last">
              <span>+2.4%</span>
              <span>from last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// My balance
// $921.48

// Spending - Last 7 days

// mon
// tue
// wed
// thu
// fri
// sat
// sun

// Total this month
// $478.33

// +2.4%
// from last month
