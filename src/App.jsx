import { useState } from "react";
import ActionCard from "./components/ActionCard";
import ActivityRow from "./components/ActivityRow";
import WalletCarousel from "./components/WalletCarousel";
import WalletDots from "./components/WalletDots";
import WalletTabs from "./components/WalletTabs";
import { activities } from "./data/uiData";
import designSystem from "./design-system/design-system.json";

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

      <WalletTabs activeWallet={activeWallet} onSelect={setActiveWallet} />

      <WalletCarousel activeWallet={activeWallet} assets={assets} />

      <WalletDots activeWallet={activeWallet} onSelect={setActiveWallet} />

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
