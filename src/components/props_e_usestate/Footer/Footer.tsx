import { memo } from "react";

const Footer = memo(() => {
    console.log('render footer');
    return <footer>
        footer
    </footer>
})

export default Footer;