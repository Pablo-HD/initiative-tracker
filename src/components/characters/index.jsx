const Characters = ({ characters, setCharacters, setFocus }) => {
  const newList = JSON.parse(JSON.stringify(characters));

  const handleChange = (e) => {
    const { name, id, value } = e.target;
    newList[id.split("-")[1]][name] = value;
    setCharacters(newList);
  };

  const handleRemove = (e) => {
    const index = e.target.id.split("-")[1];
    newList.splice(index, 1);
    setCharacters(newList);
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
          <div className="character" key={characterIndex}>
            {Object.keys(character).map((key, index) => (
              <input
                type={typeof value === "number" ? "number" : "text"}
                key={index}
                onChange={handleChange}
                name={key}
                id={`${key}-${characterIndex}`}
                value={character[key]}
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
