const TextBlock = (props) => {
  return (
    <div className="text-block">
      <div className="">
        <h1 className="margin-bottom-med">{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default TextBlock;
