import { walletOrder } from "../data/uiData";

const walletLabels = {
  primary: "Primary Card",
  bitcoin: "Bitcoin Wallet",
  ethereum: "Ethereum Wallet",
  savings: "Savings Card"
};

export default function WalletTabs({ activeWallet, onSelect }) {
  return (
    <section className="tabs">
      {walletOrder.map((wallet) => (
        <button
          key={wallet}
          type="button"
          className={`tab ${activeWallet === wallet ? "tab-active" : ""}`}
          onClick={() => onSelect(wallet)}
        >
          {walletLabels[wallet]}
        </button>
      ))}
    </section>
  );
}
