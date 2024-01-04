import { useEffect } from "react";

export default function Skill() {
  useEffect(() => {
    document.title = "Rizki Sepriadi | Skill";
  });
  return (
    <article className="skill" id="skill">
      <h1>Skill</h1>
      <ul>
        <li>OOP Java</li>
        <li>HTML & CSS</li>
        <li>Basic JavaScript</li>
        <li>Basic Phyton</li>
        <li>React JS</li>
      </ul>
    </article>
  );
}
