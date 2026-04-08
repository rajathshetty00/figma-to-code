import designSystem from "./design-system/design-system.json";
import { useState } from "react";

const activities = [
  { icon: "🛒", title: "Amazon Purchase", date: "Oct 19, 2025", amount: "-$89.99", color: "loss", chip: "green" },
  { icon: "₿", title: "BTC Purchase", date: "Oct 18, 2025", amount: "-$500.00", color: "loss", chip: "orange" },
  { icon: "💰", title: "Salary Deposit", date: "Oct 15, 2025", amount: "+$3,200.00", color: "gain", chip: "mint" }
];

const walletVariants = {
  primary: {
    label: "Balance",
    balance: "$12,453.87",
    subBalance: "",
    bottomLabel: "Card Number",
    bottomValue: "•••• 4532",
    cardClass: "",
    topChip: "Main",
    topIcon: "card",
    rightMark: "master"
  },
  bitcoin: {
    label: "BTC Balance",
    balance: "0.4582 BTC",
    subBalance: "≈ $19,244.40",
    bottomLabel: "Wallet",
    bottomValue: "BTC",
    cardClass: "bank-card-bitcoin",
    topChip: "",
    topIcon: "wallet",
    rightMark: "btc"
  },
  ethereum: {
    label: "ETH Balance",
    balance: "5.932 ETH",
    subBalance: "≈ $20,716.40",
    bottomLabel: "Wallet",
    bottomValue: "ETH",
    cardClass: "bank-card-ethereum",
    topChip: "ETH",
    topIcon: "eth-logo",
    rightMark: "eth-logo"
  },
  savings: {
    label: "Savings Balance",
    balance: "$8,920.42",
    subBalance: "Goal $12,000.00",
    bottomLabel: "Account",
    bottomValue: "Savings",
    cardClass: "bank-card-savings",
    topChip: "Save",
    topIcon: "savings-logo",
    rightMark: "savings-logo"
  }
};
const walletOrder = ["primary", "bitcoin", "ethereum", "savings"];

function VariantLogo({ type, size = "sm" }) {
  if (type === "eth-logo") {
    return (
      <span className={`variant-logo ${size}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L6.75 12L12 9.5L17.25 12L12 2Z" />
          <path d="M12 22L6.75 13L12 16L17.25 13L12 22Z" />
        </svg>
      </span>
    );
  }

  return (
    <span className={`variant-logo ${size}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 10.5L12 4L19 10.5V19H5V10.5Z" />
        <path d="M9 19V14H15V19" />
      </svg>
    </span>
  );
}

function ActionCard({ icon, label }) {
  return (
    <button className="action-card" type="button">
      <span className="action-icon">
        <img src={icon} alt="" />
      </span>
      <span className="action-label">{label}</span>
    </button>
  );
}

function ActivityRow({ item }) {
  return (
    <article className="activity-row">
      <div className="activity-left">
        <span className={`activity-chip ${item.chip}`}>{item.icon}</span>
        <span className="activity-text">
          <span className="activity-title">{item.title}</span>
          <span className="activity-date">{item.date}</span>
        </span>
      </div>
      <span className={`activity-amount ${item.color}`}>{item.amount}</span>
    </article>
  );
}

export default function App() {
  const assets = designSystem.asset;
  const [activeWallet, setActiveWallet] = useState("primary");
  const activeIndex = walletOrder.indexOf(activeWallet);

  const handleCardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const dx = px - 0.5;
    const dy = py - 0.5;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;
    const liftX = (px - 0.5) * 10;
    const liftY = (py - 0.5) * 10;
    const edgeStrength = Math.min(1, Math.max(Math.abs(dx), Math.abs(dy)) * 2);

    event.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--ry", `${rotateY}deg`);
    event.currentTarget.style.setProperty("--lx", `${liftX}px`);
    event.currentTarget.style.setProperty("--ly", `${liftY}px`);
    event.currentTarget.style.setProperty("--mx", `${dx * 2}`);
    event.currentTarget.style.setProperty("--my", `${dy * 2}`);
    event.currentTarget.style.setProperty("--sx", `${dx * 20}`);
    event.currentTarget.style.setProperty("--sy", `${dy * 20}`);
    event.currentTarget.style.setProperty("--edge", `${edgeStrength}`);
    event.currentTarget.style.setProperty("--gx", `${px * 100}%`);
    event.currentTarget.style.setProperty("--gy", `${py * 100}%`);
    event.currentTarget.style.setProperty("--go", `${0.12 + edgeStrength * 0.22}`);
    event.currentTarget.style.setProperty("--eo", `${0.08 + edgeStrength * 0.22}`);
  };

  const handleCardLeave = (event) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    event.currentTarget.style.setProperty("--lx", "0px");
    event.currentTarget.style.setProperty("--ly", "0px");
    event.currentTarget.style.setProperty("--mx", "0");
    event.currentTarget.style.setProperty("--my", "0");
    event.currentTarget.style.setProperty("--sx", "0");
    event.currentTarget.style.setProperty("--sy", "0");
    event.currentTarget.style.setProperty("--edge", "0");
    event.currentTarget.style.setProperty("--go", "0");
    event.currentTarget.style.setProperty("--eo", "0");
  };

  return (
    <main className="app" style={{ fontFamily: designSystem.typography.fontFamily.base }}>
      <section className="header">
        <div>
          <h1>EZ-Banko</h1>
          <p className="muted">Welcome back, Alex</p>
        </div>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Notifications">
            <img src={assets.bell} alt="" />
          </button>
          <button className="icon-button" type="button" aria-label="Settings">
            <img src={assets.settings} alt="" />
          </button>
        </div>
      </section>

      <section className="balance">
        <p className="muted">Total Balance (USD)</p>
        <h2>$47,779.06</h2>
      </section>

      <section className="tabs">
        <button type="button" className={`tab ${activeWallet === "primary" ? "tab-active" : ""}`} onClick={() => setActiveWallet("primary")}>Primary Card</button>
        <button type="button" className={`tab ${activeWallet === "bitcoin" ? "tab-active" : ""}`} onClick={() => setActiveWallet("bitcoin")}>Bitcoin Wallet</button>
        <button type="button" className={`tab ${activeWallet === "ethereum" ? "tab-active" : ""}`} onClick={() => setActiveWallet("ethereum")}>Ethereum Wallet</button>
        <button type="button" className={`tab ${activeWallet === "savings" ? "tab-active" : ""}`} onClick={() => setActiveWallet("savings")}>Savings Card</button>
      </section>

      <section className="card-carousel">
        <div
          className="card-track"
          style={{ transform: `translateX(calc(-${activeIndex} * (100% + var(--card-gap))))` }}
        >
          {walletOrder.map((key) => {
            const variant = walletVariants[key];

            return (
              <div className="card-slide" key={key}>
                <section
                  className={`bank-card card-interactive ${variant.cardClass}`}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                >
                  <span className="card-glare" />
                  <span className="card-orb orb-top" />
                  <span className="card-orb orb-bottom" />
                  <div className="card-top">
                    <div>
                      <p className="card-label">{variant.label}</p>
                      <p className="card-balance">{variant.balance}</p>
                      {variant.subBalance ? <p className="card-sub-balance">{variant.subBalance}</p> : null}
                    </div>
                    <div className="card-right">
                      {variant.topChip ? <span className="chip">{variant.topChip}</span> : null}
                      {variant.topIcon === "wallet" ? (
                        <img src={assets.wallet} alt="" />
                      ) : variant.topIcon === "eth-logo" || variant.topIcon === "savings-logo" ? (
                        <VariantLogo type={variant.topIcon} size="sm" />
                      ) : (
                        <img src={assets.card} alt="" />
                      )}
                    </div>
                  </div>
                  <div className={`card-bottom ${variant.subBalance ? "card-bottom-compact" : ""}`}>
                    <div>
                      <p className="card-number-label">{variant.bottomLabel}</p>
                      <p className="card-number">{variant.bottomValue}</p>
                    </div>
                    {variant.rightMark === "btc" ? (
                      <img className="btc-mark" src={assets.btcMark} alt="" />
                    ) : variant.rightMark === "eth-logo" || variant.rightMark === "savings-logo" ? (
                      <VariantLogo type={variant.rightMark} size="lg" />
                    ) : (
                      <div className="master">
                        <span />
                        <span />
                      </div>
                    )}
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </section>

      <div className="dots">
        {walletOrder.map((wallet) => (
          <button
            key={wallet}
            type="button"
            className={`dot ${activeWallet === wallet ? "active" : ""}`}
            onClick={() => setActiveWallet(wallet)}
            aria-label={`Go to ${wallet} card`}
          />
        ))}
      </div>

      <section className="actions">
        <ActionCard icon={assets.send} label="Send" />
        <ActionCard icon={assets.receive} label="Receive" />
        <ActionCard icon={assets.trade} label="Trade" />
      </section>

      <section className="recent">
        <header className="recent-head">
          <h3>Recent Activity</h3>
          <button type="button">See all</button>
        </header>
        <div className="activity-list">
          {activities.map((item) => (
            <ActivityRow key={item.title} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
