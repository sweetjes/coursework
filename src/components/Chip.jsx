export default function Chip({ date, index, handleClick }) {
  return (
    <div className="chip-chips">
      {date}
      <button className="Button" onClick={() => handleClick(index)}>
        &times;
      </button>
    </div>
  );
}
