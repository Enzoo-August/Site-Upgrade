import React from "react";
import logoUpgrade from "./assets/logo-upgrade.png";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoUpgrade}
              alt="Logo Upgrade - Segurança & Acessibilidade"
              className="h-10 w-auto"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-emerald-700">
                Segurança & Acessibilidade
              </span>
              <span className="text-xs text-slate-500">
                Barras de apoio em conformidade com a NBR 9050
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-emerald-700 transition">
              Início
            </a>
            <a href="#produtos" className="hover:text-emerald-700 transition">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-emerald-700 transition">
              Sobre a Upgrade
            </a>
            <a href="#contato" className="hover:text-emerald-700 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio" className="max-w-6xl mx-auto px-4 pb-16">
        {/* HERO */}
        <section className="pt-10 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              UPGRADE • Segurança & Acessibilidade
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Barras de apoio para um ambiente{" "}
              <span className="text-emerald-700">mais seguro</span> e{" "}
              <span className="text-orange-600">acessível</span>.
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Desde 2010, a UPGRADE atua no segmento de produtos para segurança
              e acessibilidade, oferecendo barras de apoio com alto padrão de
              qualidade, em conformidade com a Norma NBR 9050, para banheiros,
              boxes e áreas que exigem mais conforto e segurança.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#produtos"
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-sm"
              >
                Ver linhas de produtos
              </a>

              <a
                href="#contato"
                className="px-5 py-2.5 rounded-full text-sm font-semibold border border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition"
              >
                Solicitar orçamento
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Fabricadas em conformidade com a NBR 9050
              </span>
              <span className="h-1 w-10 rounded-full bg-slate-200" />
              <span>Materiais com certificado de qualidade</span>
            </div>
          </div>

          {/* LADO DIREITO DO HERO – depois podemos trocar por fotos reais */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-orange-500 p-1 shadow-lg">
              <div className="rounded-3xl bg-white p-6 h-full flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Soluções em barras de apoio
                </h2>
                <p className="text-sm text-slate-600">
                  Ideal para banheiros adaptados, áreas de banho, corredores e
                  ambientes que exigem acessibilidade, segurança e conforto para
                  idosos e pessoas com mobilidade reduzida.
                </p>

                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Produção interna com gestão da qualidade ISO 9001</li>
                  <li>• Materiais com procedência certificada</li>
                  <li>• Medidas padrão e especiais sob medida</li>
                  <li>• Indicadas para residências, clínicas, hotéis e mais</li>
                </ul>

                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    + Segurança • + Conforto • + Acessibilidade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUEM É A UPGRADE / SOBRE */}
        <section id="sobre" className="py-10 border-t border-slate-200">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Quem é a UPGRADE?
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                A UPGRADE é uma empresa que desde 2010 atua no segmento de
                produtos para segurança e acessibilidade, sempre buscando unir
                alto padrão de qualidade, atendimento próximo e preço justo.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                As barras de apoio são fabricadas em conformidade com a Norma{" "}
                <span className="font-semibold text-slate-800">NBR 9050</span>,
                utilizando materiais de fornecedores com certificado de
                qualidade, garantindo segurança e procedência em cada produto.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Além das medidas padrão, também produzimos peças especiais,
                conforme projeto ou medidas fornecidas pelo cliente,
                atendendo de forma personalizada as necessidades de cada
                ambiente.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900">
                Para quem são nossos produtos?
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Idosos e pessoas com mobilidade reduzida</li>
                <li>• Pessoas com deficiência ou necessidades especiais</li>
                <li>• Residências que buscam mais segurança no banho</li>
                <li>• Clínicas, consultórios, hospitais e casas de repouso</li>
                <li>• Hotéis, pousadas e estabelecimentos que prezam por acessibilidade</li>
              </ul>
              <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-emerald-900">
                Nossos produtos auxiliam no banho, no uso do vaso sanitário e em
                áreas de circulação, oferecendo mais segurança, conforto e
                independência no dia a dia.
              </div>
            </div>
          </div>
        </section>

        {/* PLACEHOLDERS PARA PRÓXIMOS PASSOS */}
        <section
          id="produtos"
          className="mt-8 py-8 border-t border-dashed border-slate-200 text-sm text-slate-500"
        >
          <p>
            Aqui vamos montar a grade de produtos (barras de apoio retas, em L,
            em U, medidas especiais etc.). No próximo passo a gente cria os
            cards com as imagens reais.
          </p>
        </section>

        <section
          id="contato"
          className="mt-4 py-8 border-t border-dashed border-slate-200 text-sm text-slate-500"
        >
          <p>
            Nesta seção vamos colocar os dados de contato, botão de WhatsApp e
            um formulário de orçamento simples.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
