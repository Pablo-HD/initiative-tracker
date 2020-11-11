import "./index.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = ({ characters, setCharacters, setFocus }) => {
  const newList = JSON.parse(JSON.stringify(characters));

  const handleRemove = (e) => {
    const index = getIndexFromNewList(e.target.parentNode.id);
    newList.splice(index, 1);
    setCharacters(newList);
  };

  const getIndexFromNewList = (id) => {
    const index = newList.findIndex((character) => character[1] === id);
    return index;
  };

  const handleAddHp = (e) => {
    const index = getIndexFromNewList(e.target.parentNode.parentNode.id);
    newList[index][0].hp += 1;
    setCharacters(newList);
  };

  const handleSubtractHp = (e) => {
    const index = getIndexFromNewList(e.target.parentNode.parentNode.id);
    newList[index][0].hp -= 1;
    setCharacters(newList);
  };

  return (
    <div className="characters">
      {characters.map((character, characterIndex) => {
        return (
          <div className="character" key={characterIndex} id={character[1]}>
            <h2>
              <span className="initiative">
                <FontAwesomeIcon icon={["fas", "bolt"]} />
                {" " + character[0].initiative}
              </span>
              <span className="name">{character[0].name}</span>
              <span className="ac">
                <FontAwesomeIcon icon={["fas", "shield-alt"]} />
                {" " + character[0].ac}
              </span>
            </h2>
            <div className="character-prop">
              <span>HP</span>
              <button className="hp-btn" onClick={handleSubtractHp}>
                -
              </button>
              <span>{character[0].hp}</span>
              <button className="hp-btn" onClick={handleAddHp}>
                +
              </button>
            </div>
            <FontAwesomeIcon
              className="rm-btn"
              icon={["fas", "trash-alt"]}
              onClick={handleRemove}
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
