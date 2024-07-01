export default function Description({ text, extraClass }) {
  return (
    <p
      className={`max-w-lg text-xs pt-1 font-medium text-white 
                  ${extraClass}
                `}
    >
      {text}
    </p>
  );
}
