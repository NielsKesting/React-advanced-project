import "../Style/ButtonStyle/button.css";

export function Button({ btnText }) {
  const handleClick = () => {
    console.log(btnText)
  }

  return (
    <button type="button" className="button" onClick={handleClick}>
      {btnText}
    </button>
  );
}
