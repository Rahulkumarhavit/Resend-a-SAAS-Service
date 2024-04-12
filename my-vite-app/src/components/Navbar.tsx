import { NAV_LINKS } from "../constants"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
        <ul className="h-full gap-12 flex justify-center">
        {NAV_LINKS.map((link) => (
          <Link to={link.href} key={link.key} className="text-2xl font-medium text-slate-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar