import Character from "../character";

const Characters = ({ characters, editCharacter, setCharacters }) => {
  return <Character characters={characters} editCharacter={editCharacter} setCharacters={setCharacters}/>;
};

export default Characters;
