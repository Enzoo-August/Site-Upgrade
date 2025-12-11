import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoUpgrade from "../assets/logo-upgrade.png";

function Header() {
  const navLinkClass =
    "text-sm font-medium hover:text-emerald-700 transition";

  const activeClass = "text-emerald-700";

  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUpgrade}
            alt="Upgrade - Segurança & Acessibilidade"
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline text-sm font-semibold text-emerald-700">
            Segurança & Acessibilidade
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            Produtos
          </NavLink>

          {/* Você pode depois criar páginas /sobre e /contato */}
          <a href="#sobre" className={navLinkClass}>
            Sobre
          </a>
          <a href="#contato" className={navLinkClass}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
