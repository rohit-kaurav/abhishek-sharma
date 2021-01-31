import MenuItems from '../../constants/navbar-constants';

function Navbar(props) {
  return (
    <div className="navbar">
      <span className="p-5">
        { props.title }
      </span>
      { MenuItems.map(element => {
        return <span className="p-5">{ element.text }</span>
      }) }
    </div>
  )
}

export default Navbar;