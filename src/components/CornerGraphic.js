const CornerGraphic = (props) => {
  return (
    <svg
      className={props.cssClass}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="-1.74846e-07"
        y1="2"
        x2="20"
        y2="2"
        stroke="black"
        stroke-width="4"
      />
      <line x1="18" x2="18" y2="20" stroke="black" stroke-width="4" />
    </svg>
  );
};

export default CornerGraphic;
