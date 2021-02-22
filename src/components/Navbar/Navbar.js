import MenuItems from '../../constants/navbar-constants';

function Navbar () {
  return (
    <div className="navbar">
      { MenuItems.map(element => {
        return <span className="p-5">{ element.text }</span>
      }) }
    </div>
  )
}

export default Navbar;