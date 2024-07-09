import Link from "next/link";
const NavLink = ({ href , title }) => {
return (
    <Link 
    href={href}  
   className="block py-2 px-4 text-[#b3b9bd] sm:text-xl hover:text-white text-right"> 
   {title}
</Link>

);

};
export default NavLink;