import React from "react";
import ProductCard from "../components/ProductCard";
import barrareta from "../assets/barra-reta.jpg"; // ajuste a extensão se precisar

function Products() {
  const products = [
    {
      slug: "barra-reta",
      name: "Barra de Apoio Reta",
      shortDescription:
        "Indicada para banheiros acessíveis em residências, hotéis, clínicas e hospitais. Produção conforme NBR 9050.",
      priceFrom: 129.9, // preço aproximado em R$
      image: barrareta,
    },
    // depois você adiciona Barra em L, Barra em U, Banco articulado, etc.
  ];

  return (
    <section className="py-8">
      <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Produtos UPGRADE
          </h2>
          <p className="text-sm text-slate-600">
            Barras de apoio e acessórios para acessibilidade com alto padrão
            de qualidade.
          </p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
