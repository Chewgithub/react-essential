function TabButton({children, onSelect, isSelected}) {

    function handleClick() {
        console.log('Tab button clicked:', children);
    }

    return (
        <li>
            <button className={isSelected? 'active': undefined} onClick={onSelect}>
                {children}
            </button>
        </li>

    );
}




export default TabButton;