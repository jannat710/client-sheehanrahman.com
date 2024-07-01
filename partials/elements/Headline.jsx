export default function Headline({
  text,
  subText,
  extraClass,
  textColor,
  subTextColor,
}) {
  return (
    <h3 className={`text-base font-normal pb-1 ${extraClass}`}>
      <span style={{ color: textColor }}>{text}</span>
      <br></br>
      <span style={{ color: subTextColor }}>{subText}</span>
    </h3>
  );
}
