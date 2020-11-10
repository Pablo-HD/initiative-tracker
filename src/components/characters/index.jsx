const Characters = ({ characters, setCharacters, setFocus }) => {
  const newList = JSON.parse(JSON.stringify(characters));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = getIndexFromNewList(e.target.parentNode.id);
    newList[index][0][name] = value;
    setCharacters(newList);
  };

  const handleRemove = (e) => {
    const index = getIndexFromNewList(e.target.parentNode.id);
    newList.splice(index, 1);
    setCharacters(newList);
  };

  const getIndexFromNewList = (id) => {
    const index = newList.findIndex((character) => character[1] === id);
    return index;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setFocus(document.getElementsByClassName("App")[0]);
      e.target.blur();
    }
  };

  return (
    <div className="characters">
      {characters.map((character, characterIndex) => {
        return (
          <div className="character" key={characterIndex} id={character[1]}>
            {Object.keys(character[0]).map((key, index) => (
              <input
                type={typeof value === "number" ? "number" : "text"}
                key={index}
                onChange={handleChange}
                name={key}
                value={character[0][key]}
                onKeyPress={handleKeyPress}
              />
            ))}
            <button onClick={handleRemove}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
