export default function Button({ children, full, ...props }) {
  let cssClass = "button";
  if (full) {
    cssClass += " full";
  }
  return (
    <button {...props} className={cssClass}>
      {children}
    </button>
  );
}
