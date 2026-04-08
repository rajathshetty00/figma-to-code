export default function ActionCard({ icon, label }) {
  return (
    <button className="action-card" type="button">
      <span className="action-icon">
        <img src={icon} alt="" />
      </span>
      <span className="action-label">{label}</span>
    </button>
  );
}
