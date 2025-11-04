///props is a Javascript syntax, it include all other arguments into props, so developer can use props.atribute (Rest Property)
function Section({ children, ...props}) {
  return (

    /// this props is a JSX syntax, called the Spread Attribute. It unpacks (or "spreads") the contents of the props object onto the <section> element as HTML attributes.
    <section {...props}>
      <h2>{props.title}</h2>
      {children}
    </section>
  );
}

export default Section;
