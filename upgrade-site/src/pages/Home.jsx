import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pt-8 pb-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          UPGRADE • Segurança & Acessibilidade
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          Barras de apoio para um ambiente{" "}
          <span className="text-emerald-700">mais seguro</span> e{" "}
          <span className="text-orange-600">acessível</span>.
        </h1>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Desde 2010, a UPGRADE oferece soluções em barras de apoio em
          conformidade com a NBR 9050, produzidas por empresa certificada
          ISO 9001, garantindo segurança, qualidade e conforto em banheiros
          acessíveis.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/produtos"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition"
          >
            Ver produtos
          </Link>
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        {/* aqui depois podemos usar uma ilustração ou foto maior do banheiro */}
      </div>
    </section>
  );
}

export default Home;
