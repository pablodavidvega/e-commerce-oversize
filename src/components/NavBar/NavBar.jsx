import BadgeExample from '../CartWidgwet/CartWidget'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>Oversize</h1>
      <div className='list-products'>
         <button>Camisetas</button>
         <button>Buzos</button>
         <button>Jeans</button>
      </div>
      <BadgeExample />
    </nav>
  )
}

export default NavBar
