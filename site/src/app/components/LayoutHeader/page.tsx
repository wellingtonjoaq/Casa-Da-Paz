
import Link from "next/link"


export const LayoutHeader = () => {

  return (

    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/imagens/logo2.png" width="130" height="70" className="ps-3" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto pe-5 fs-6 fw-bold">
              <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/comoajudar">Como Ajudar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/bazar">Bazar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/galeria">Galeria</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" href="/memorial">Memorial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="http://localhost:5173/">Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>

  )

}