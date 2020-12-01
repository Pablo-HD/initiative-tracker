import { useState } from "react";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import CharacterDescription from "../character-description";
import CharacterHeader from "../character-header";
import CharacterCard from "../character-card";
import CharacterMenu from "../character-menu";
import CharacterNotes from "../character-notes";

const Character = ({ character }) => {
  const { id, properties } = character;

  const [tabValue, setTabValue] = useState("info");
  const [currHp, setCurrHp] = useState(+properties.maxHp);

  const handleTab = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <CharacterCard>
      <CharacterHeader
        initiative={properties.initiative}
        name={properties.name}
        ac={properties.ac}
      />
      <Tabs
        value={tabValue}
        onChange={handleTab}
        aria-label="simple tabs example"
      >
        <Tab value="info" label="Info" />
        <Tab value="notes" label="Notes" />
      </Tabs>
      {tabValue === "info" && (
        <CharacterDescription
          maxHp={properties.maxHp}
          currHp={currHp}
          setCurrHp={setCurrHp}
          id={id}
          properties={properties}
        />
      )}
      {tabValue === "notes" && <CharacterNotes character={character} />}
      <CharacterMenu character={character} />
    </CharacterCard>
  );
};

export default Character;
