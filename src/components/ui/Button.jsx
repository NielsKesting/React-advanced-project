import "../ui/ButtonStyle/button.css";

export function Button({ btnText }) {
  return (
    <button type="button" className="button">
      {btnText}
    </button>
  );
}
