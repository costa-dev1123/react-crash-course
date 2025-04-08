import { memo } from "react";

const Header = memo(() => {
    console.log('render header');
    return <header>
        hader
    </header>
})

export default Header;