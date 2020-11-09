import Character from "../character";

const Characters = ({ characters }) => {
  return characters
    .sort((a, b) => b.initiative - a.initiative)
    .map((character, index) => {
      return <Character />;
    });
};

export default Characters;
