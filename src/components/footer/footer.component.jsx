const Footer = () => {
    return (
        <footer className="page-footer  purple lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/Ilnur-B/react-shop-app"
                        target='_blank'
                    >Shop App
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
