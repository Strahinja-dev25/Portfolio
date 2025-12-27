
function Header () {
    return (
        <header className="main-header">
            <a href="#" className="logo-link">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#4fd1c5", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#63b3ed", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    
                    <path d="M32 0L59.7128 16V48L32 64L4.28719 48V16L32 0Z" fill="url(#grad1)"/>
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Consolas, 'Courier New', monospace" fontSize="40" fontWeight="900" fill="#0B1120">SK</text>
                </svg>
            </a>

            <nav className="main-nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#achievements">Achievements</a>
                <a href="#philosophy">Philosophy</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
