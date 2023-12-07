import "../Style/TextInputStyle/TextInput.css";

export const TextInput = ({ onChange }) => (
	<input
		className="textInput"
		placeholder="Search events"
		onChange={onChange}
	></input>
);
