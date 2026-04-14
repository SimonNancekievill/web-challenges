import "./Card.css";

export default function Card({ name, id, color }) {
  return <p className={"card"}>{name}</p>;
}
