import React, { useState } from "react";
import logoUpgrade from "./assets/logo-upgrade.png";
import reactLogo from "./assets/react.svg";
import barrareta from "./assets/barra-reta.jpg";


// ---------------------------------------------------------
// COMPONENTE: FORMULÁRIO + CARRINHO DE ORÇAMENTO
// ---------------------------------------------------------
function BarraRetaOrcamento() {
  const [modelo, setModelo] = useState("inox");
  const [comprimento, setComprimento] = useState("60");
  const [quantidade, setQuantidade] = useState(1);
  const [itensOrcamento, setItensOrcamento] = useState([]);

  const comprimentosDisponiveis = [
    "30", "40", "45", "50", "60", "70", "80", "90", "100", "120",
  ];

  function handleAdicionar() {
    if (!quantidade || quantidade <= 0) return;

    const novoItem = {
      produto: "Barra de Apoio Reta",
      modelo,
      comprimento,
      quantidade,
    };

    setItensOrcamento((prev) => [...prev, novoItem]);
  }

  const resumoTexto =
    itensOrcamento.length === 0
      ? ""
      : itensOrcamento
          .map(
            (item, index) =>
              `${index + 1}) ${item.produto} - Modelo: ${
                item.modelo === "inox" ? "Inox polido" : "Alumínio"
              }, Comprimento: ${item.comprimento} cm, Qtde: ${item.quantidade}`
          )
          .join("\n");

  const numeroWhatsApp = "5511999999999"; // <-- coloque o número verdadeiro
  const linkWhatsApp =
    itensOrcamento.length === 0
      ? "#"
      : `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
          `Olá! Gostaria de solicitar orçamento das seguintes barras:\n\n${resumoTexto}`
        )}`;

  return (
    <section id="barra-reta" className="py-12 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Barra de Apoio Reta
        </h2>
        <p className="text-sm text-slate-600 mb-8 max-w-3xl">
          Produto fabricado conforme <strong>ABNT/NBR 9050</strong> por empresa certificada
          <strong> ISO 9001</strong>. Ideal para banheiros, hospitais, hotéis e residências,
          garantindo segurança, conforto e acessibilidade.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LADO ESQUERDO — Informações técnicas */}
          <div className="text-sm text-slate-700 space-y-4">

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Modelos</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Barra de Apoio Reta em Inox Polido</li>
                <li>Barra de Apoio Reta em Alumínio</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Aplicações</h3>
              <p>Indicada para instalação em banheiros, hospitais, hotéis e residências.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Vantagens</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Alta resistência</li>
                <li>Fácil instalação</li>
                <li>Alto padrão de qualidade</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Composição</h3>
              <p>Aço inox polido e alumínio com pintura epóxi.</p>
              <p className="text-xs text-slate-500 mt-1">
                Acompanha: 4 parafusos inox 3/16" x 50mm + 4 buchas nylon.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Acabamento</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Inox:</strong> polido</li>
                <li><strong>Alumínio:</strong> epóxi branco ou prata</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Comprimentos</h3>
              <p>30, 40, 45, 50, 60, 70, 80, 90, 100 e 120 cm.</p>
              <p className="text-xs text-slate-500">
                Outras medidas sob consulta.
              </p>
            </div>

            <p className="text-xs font-semibold text-emerald-700">
              5 anos de garantia.
            </p>
          </div>

          {/* LADO DIREITO — Formulário */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 space-y-5">

            <h3 className="text-base font-semibold text-emerald-900">
              Solicite seu orçamento
            </h3>

            <div>
              <label className="text-sm font-medium text-emerald-900">Modelo</label>
              <select
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 px-3 py-2"
              >
                <option value="inox">Inox Polido</option>
                <option value="aluminio">Alumínio</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-emerald-900">
                Comprimento (cm)
              </label>
              <select
                value={comprimento}
                onChange={(e) => setComprimento(e.target.value)}
                className="mt-1 w-full rounded-lg border border-emerald-300 px-3 py-2"
              >
                {comprimentosDisponiveis.map((c) => (
                  <option key={c} value={c}>
                    {c} cm
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-emerald-900">Quantidade</label>
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="mt-1 w-24 rounded-lg border border-emerald-300 px-3 py-2"
              />
            </div>

            <button
              onClick={handleAdicionar}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 rounded-full"
            >
              Adicionar ao orçamento
            </button>

            {itensOrcamento.length > 0 && (
              <div className="pt-4 border-t border-emerald-200 space-y-3">
                <h4 className="text-xs font-semibold text-emerald-800 uppercase">
                  Itens adicionados
                </h4>

                <ul className="space-y-1 text-xs text-slate-800">
                  {itensOrcamento.map((item, index) => (
                    <li key={index}>
                      {index + 1}) {item.produto} —{" "}
                      {item.modelo === "inox" ? "Inox" : "Alumínio"},{" "}
                      {item.comprimento} cm • Qtde: {item.quantidade}
                    </li>
                  ))}
                </ul>

                <textarea
                  readOnly
                  value={resumoTexto}
                  className="w-full h-24 p-2 text-xs border border-emerald-300 rounded-lg bg-white"
                />

                <a
                  href={linkWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full text-xs"
                >
                  Enviar pedido pelo WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// COMPONENTE PRINCIPAL DO SITE
// ---------------------------------------------------------
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUpgrade} alt="Upgrade" className="h-10 w-auto" />
            <span className="text-sm font-semibold text-emerald-700">
              Segurança & Acessibilidade
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-emerald-700">Início</a>
            <a href="#produtos" className="hover:text-emerald-700">Produtos</a>
            <a href="#barra-reta" className="hover:text-emerald-700">Barra Reta</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main id="inicio" className="max-w-6xl mx-auto px-4 pb-20">

        {/* HERO */}
        <section className="pt-10 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              UPGRADE • Segurança & Acessibilidade
            </span>

            <h1 className="text-3xl md:text-4xl font-bold">
              Barras de apoio para um ambiente{" "}
              <span className="text-emerald-700">mais seguro</span> e{" "}
              <span className="text-orange-600">acessível</span>.
            </h1>

            <p className="text-sm text-slate-600">
              Desde 2010 oferecendo barras de apoio com alto padrão de qualidade,
              em conformidade com NBR 9050, para banheiros, residências e áreas
              que exigem segurança e acessibilidade.
            </p>

            <div className="flex gap-3">
              <a
                href="#produtos"
                className="px-5 py-2.5 rounded-full bg-emerald-700 text-white font-semibold"
              >
                Ver produtos
              </a>
              <a
                href="#barra-reta"
                className="px-5 py-2.5 rounded-full border border-emerald-700 text-emerald-700 font-medium"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

        {/* PRODUTOS (CARD SIMPLES) */}
        <section id="produtos" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Linhas de barras de apoio</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <article className="rounded-xl border p-4 bg-white shadow-sm">
              <img src={barrareta} className="w-full h-40 object-contain" />
              <h3 className="font-semibold mt-3">Barra de Apoio Reta</h3>
              <p className="text-xs text-slate-600">
                Ideal para banheiros, áreas de banho e uso residencial/hospitalar.
              </p>
              <a
                href="#barra-reta"
                className="text-emerald-700 text-xs font-semibold mt-2 inline-block"
              >
                Ver detalhes →
              </a>
            </article>

            <article className="rounded-xl border p-4 bg-white shadow-sm">
              <img src={reactLogo} className="w-full h-40 object-contain" />
              <h3 className="font-semibold mt-3">Barra em L</h3>
              <p className="text-xs text-slate-600">
                Para apoio vertical + horizontal no mesmo ponto.
              </p>
              <span className="text-xs font-semibold text-slate-400">
                (em breve)
              </span>
            </article>

            <article className="rounded-xl border p-4 bg-white shadow-sm">
              <img src={reactLogo} className="w-full h-40 object-contain" />
              <h3 className="font-semibold mt-3">Barra em U</h3>
              <p className="text-xs text-slate-600">
                Ideal para apoio frontal e lateral.
              </p>
              <span className="text-xs font-semibold text-slate-400">
                (em breve)
              </span>
            </article>

          </div>
        </section>

        {/* SEÇÃO COMPLETA: BARRA RETA */}
        <BarraRetaOrcamento />

      </main>
    </div>
  );
}

export default App;
