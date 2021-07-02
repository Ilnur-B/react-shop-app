const Footer = () => {
    return (
        <footer className="page-footer  purple lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Shop App</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
