import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js';

function App() {

  function handleTabSelect(tabName) {
    console.log('Selected tab:', tabName);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts  {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleTabSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleTabSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleTabSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleTabSelect("State")}>State</TabButton>
          </menu>


        </section>
      </main>
    </div>
  );
}

export default App;
