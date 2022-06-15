import { Outlet, Link } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">dashboard</Link>
          </li>
          <li>
            <Link to="/tickets">tickets</Link>
          </li>
          <li>
            <Link to="/administration">administration</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  )
}

export default SharedLayout
