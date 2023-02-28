import "../assets/styles/card.css";

const Card = () => {
  return (
    <>
      <div className="card-section">
        <form>
          <div className="interact">
            <p className="pageview">100K Pageviews</p>
            <p>
              <strong className="price">$16.00</strong> /month
            </p>
            <input type="range" name="range" id="range" min={0} max={100} step={25} />
            <div className="duration">
              <p>Monthly Billing</p>
              <label className="switch">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="slider"></span>
              </label>
              <p className="dis-text">
                Yearly Billing <span className="discount-desktop">25% discount</span>
                <span className="discount-mobile">-25%</span>
              </p>
            </div>
          </div>
          <div className="hr-line"></div>
          <div className="cta">
            <ul className="features">
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button className="btn" type="submit">
              Start my trial
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
