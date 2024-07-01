export default function FlexSection({ children, extraClass }) {
  return <div className={` flex   ${extraClass}`}>{children}</div>;
}
