import CoreConcept from "./CoreConcept";

import { CORE_CONCEPTS } from "../data.js";    

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* React will give give warning to the frontend if key prop is not pass in, React uses key prop to uniquely identify each item in the list under the hood  */}
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}


export default CoreConcepts;