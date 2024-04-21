import { useMyContext } from "../../../Context";

function Entitled() {
  const { checkedNewlyWed, newlyWedDiscount } = useMyContext();
  const text = newlyWedDiscount ? "Jogosult" : "Nem jogosult";

  return <p style={{ display: checkedNewlyWed ? "block" : "none" }}>{text}</p>;
}

export default Entitled;
