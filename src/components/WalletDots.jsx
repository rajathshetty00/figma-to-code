import { walletOrder } from "../data/uiData";

export default function WalletDots({ activeWallet, onSelect }) {
  return (
    <div className="dots">
      {walletOrder.map((wallet) => (
        <button
          key={wallet}
          type="button"
          className={`dot ${activeWallet === wallet ? "active" : ""}`}
          onClick={() => onSelect(wallet)}
          aria-label={`Go to ${wallet} card`}
        />
      ))}
    </div>
  );
}
