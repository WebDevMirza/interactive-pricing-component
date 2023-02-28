import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from "react";
import "../assets/styles/card.css";

const Card = () => {
  const rate = [
    {
      pageview: "10K",
      price: 8,
    },

    {
      pageview: "50K",
      price: 12,
    },

    {
      pageview: "100K",
      price: 16,
    },

    {
      pageview: "500K",
      price: 24,
    },

    {
      pageview: "1M",
      price: 36,
    },
  ];

  const [myRate, setMyRate] = useState({ pageview: "0K", price: 0 });
  const [discount, setDiscount] = useState(false);
  const getRange = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMyRate({ pageview: rate[2].pageview, price: rate[2].price });
  }, []);

  useEffect(() => {
    const getValue = getRange.current?.value;

    switch (getValue) {
      case "0":
        setMyRate(getPrice(0));
        break;
      case "25":
        setMyRate(getPrice(1));
        break;
      case "50":
        setMyRate(getPrice(2));
        break;
      case "75":
        setMyRate(getPrice(3));
        break;
      case "100":
        setMyRate(getPrice(4));
        break;
      default:
        setMyRate(getPrice(5));
    }
  }, [discount]);

  const getPrice = (i: number): { pageview: string; price: number } => {
    return {
      pageview: rate[i].pageview,
      price: discount ? rate[i].price * 0.75 : rate[i].price,
    };
  };

  const rangeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const getValue = e.target.value;
    switch (getValue) {
      case "0":
        setMyRate(getPrice(0));
        break;
      case "25":
        setMyRate(getPrice(1));
        break;
      case "50":
        setMyRate(getPrice(2));
        break;
      case "75":
        setMyRate(getPrice(3));
        break;
      case "100":
        setMyRate(getPrice(4));
        break;
      default:
        setMyRate(getPrice(5));
    }
  };

  const switchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked ? setDiscount(true) : setDiscount(false);
  };

  const submission: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    alert(
      `Your package ${myRate.pageview} pageview for ${myRate.price} is activated for ${
        discount ? "one year" : "one month"
      }. `
    );
  };
  return (
    <>
      <div className="card-section">
        <form onSubmit={submission}>
          <div className="interact">
            <p className="pageview">{myRate.pageview} Pageviews</p>
            <p>
              <strong className="price">${myRate.price}</strong> /month
            </p>
            <div className="range-input">
              <label aria-hidden="true"></label>
              <input
                ref={getRange}
                type="range"
                name="range"
                id="range"
                min={0}
                max={100}
                step={25}
                onChange={rangeChange}
              />
            </div>
            <div className="duration">
              <p>Monthly Billing</p>
              <label className="switch">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={switchChange} />
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
