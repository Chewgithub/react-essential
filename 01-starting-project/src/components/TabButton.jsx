function TabButton(props) {

    function handleClick() {
        console.log('Tab button clicked:', props.children);
    }

    return (
        <li>
            <button onClick={props.onSelect}>
                {props.children}
            </button>
        </li>

    );
}




export default TabButton;