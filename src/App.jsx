import designSystem from "./design-system/design-system.json";
import { useState } from "react";

const activities = [
  { icon: "🛒", title: "Amazon Purchase", date: "Oct 19, 2025", amount: "-$89.99", color: "loss", chip: "green" },
  { icon: "₿", title: "BTC Purchase", date: "Oct 18, 2025", amount: "-$500.00", color: "loss", chip: "orange" },
  { icon: "💰", title: "Salary Deposit", date: "Oct 15, 2025", amount: "+$3,200.00", color: "gain", chip: "mint" }
];

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

      <section className={`bank-card ${activeWallet === "bitcoin" ? "bank-card-bitcoin" : ""}`}>
        <span className="card-orb orb-top" />
        <span className="card-orb orb-bottom" />
        <div className="card-top">
          <div>
            <p className="card-label">{activeWallet === "bitcoin" ? "BTC Balance" : "Balance"}</p>
            <p className="card-balance">{activeWallet === "bitcoin" ? "0.4582 BTC" : "$12,453.87"}</p>
            {activeWallet === "bitcoin" && <p className="card-sub-balance">≈ $19,244.40</p>}
          </div>
          <div className="card-right">
            {activeWallet === "bitcoin" ? (
              <img src={assets.wallet} alt="" />
            ) : (
              <>
                <span className="chip">Main</span>
                <img src={assets.card} alt="" />
              </>
            )}
          </div>
        </div>
        <div className={`card-bottom ${activeWallet === "bitcoin" ? "card-bottom-bitcoin" : ""}`}>
          <div>
            <p className="card-number-label">{activeWallet === "bitcoin" ? "Wallet" : "Card Number"}</p>
            <p className="card-number">{activeWallet === "bitcoin" ? "BTC" : "•••• 4532"}</p>
          </div>
          {activeWallet === "bitcoin" ? (
            <img className="btc-mark" src={assets.btcMark} alt="" />
          ) : (
            <div className="master">
              <span />
              <span />
            </div>
          )}
        </div>
      </section>

      <div className="dots">
        <span className={`dot ${activeWallet === "primary" ? "active" : ""}`} />
        <span className={`dot ${activeWallet === "bitcoin" ? "active" : ""}`} />
        <span className={`dot ${activeWallet === "ethereum" ? "active" : ""}`} />
        <span className={`dot ${activeWallet === "savings" ? "active" : ""}`} />
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
