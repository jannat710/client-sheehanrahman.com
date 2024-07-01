export default function SectionWrapper({ children, extraClass }) {
  return (
    <div className={`h-full pt-16 px-9 lg:px-24  ${extraClass}`}>
      {children}
    </div>
  );
}
