import { useState } from "react";

import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

import { EXAMPLES } from "../data.js";

function Examples() {
  // selectedTopic is the current state value - current executed snapshot of current execution cycle
  // setSelectedTopic is the State updating function - function that allows us to update the state value,
  // calling this function re-renders the component

  const [selectedTopic, setSelectedTopic] = useState();

  function handleTabSelect(tabName) {
    //Calling this will change the state value and SCHEDULE a trigger to re-render, re-render will happen after
    // this function execution completes
    setSelectedTopic(tabName);
  }

  let tabContent = (
    <div>
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div id="tab-content">
          {" "}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </div>
  );
  return (
    <Section title="Examples" id="examples" className="">
      <Tabs
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components" ? true : false}
              onSelect={() => handleTabSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx" ? true : false}
              onSelect={() => handleTabSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props" ? true : false}
              onSelect={() => handleTabSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state" ? true : false}
              onSelect={() => handleTabSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
