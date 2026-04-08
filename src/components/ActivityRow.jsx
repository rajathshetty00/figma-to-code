export default function ActivityRow({ item }) {
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
