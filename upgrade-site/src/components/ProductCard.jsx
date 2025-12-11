import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ slug, name, shortDescription, priceFrom, image }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceFrom);

  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-4"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900 text-sm mb-1">{name}</h3>
        <p className="text-xs text-slate-600 flex-1">{shortDescription}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-700">
            A partir de {formattedPrice}
          </span>

          <Link
            to={`/produto/${slug}`}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Ver detalhes →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
