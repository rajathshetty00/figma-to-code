import { walletOrder, walletVariants } from "../data/uiData";
import VariantLogo from "./VariantLogo";

export default function WalletCarousel({ activeWallet, assets }) {
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
  );
}
