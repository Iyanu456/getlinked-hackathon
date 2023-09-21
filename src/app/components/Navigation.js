export default function Navigation() {
    return (
        <header>
            <h3 className="logo"><b>get<span style={{color: "#d434fe"}}>linked</span></b></h3>
            <ul className="nav-group">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li className="btn-gradient" style={{marginLeft: "1.2em"}}>Register</li>
            </ul>
        </header>
    )
}