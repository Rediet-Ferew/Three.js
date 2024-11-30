const NavItems = () => {
    const items = ['Home', 'About', 'Projects', 'Contact'];
  return (
    
    <ul className="nav-ul">
        {
            items.map((item, index) => 
            <li key={index} className="nav-li">
                <a href={`#${item.toLowerCase()}`} className="nav-li_a">{item}</a>
            </li>
            )
        }
        </ul>
  )
}

export default NavItems