export default function TabButton({children}) {
  function handleClick() {
    alert("Nút bấm được click");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
