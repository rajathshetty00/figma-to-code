export default function VariantLogo({ type, size = "sm" }) {
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
