import React, { useState } from "react";
import { useParams } from "react-router-dom";
import banheiroPNE from "../assets/banheiro-pne-1.png"; // imagem principal
import barrareta from "../assets/barra-reta.jpg"; // imagem do produto

const numeroWhatsApp = "5511999999999"; // TROCAR pelo número real
const emailLoja = "contato@upgrade.com.br"; // TROCAR pelo e-mail real

function ProductDetails() {
  const { slug } = useParams();

  // Por enquanto só tratamos barra-reta
  if (slug !== "barra-reta") {
    return (
      <section className="py-10">
        <p className="text-sm text-slate-600">Produto não encontrado.</p>
      </section>
    );
  }

  const precoBase = 129.9; // preço “a partir de”
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(precoBase);

  // Quando você tiver mais imagens, é só adicionar aqui
  const productImages = [barrareta, banheiroPNE]; // [banheiroPNE, outraImagem, etc]
  const [imagemAtiva, setImagemAtiva] = useState(productImages[0]);

  const [modelo, setModelo] = useState("inox");
  const [comprimento, setComprimento] = useState("60");
  const [quantidade, setQuantidade] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const comprimentosDisponiveis = [
    "30",
    "40",
    "45",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "120",
  ];

  const modeloLabel = modelo === "inox" ? "Inox polido" : "Alumínio";

  const resumoPedido = `
Produto: Barra de Apoio Reta
Modelo: ${modeloLabel}
Comprimento: ${comprimento} cm
Quantidade: ${quantidade}
Preço aproximado (unitário): ${formattedPrice} (sem frete)

Dados do cliente:
Nome: ${nome || "-"}
E-mail: ${email || "-"}
Telefone: ${telefone || "-"}
Endereço: ${endereco || "-"}

Observações:
${observacoes || "-"}
  `.trim();

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento:\n\n${resumoPedido}`
  )}`;

  const mailtoUrl = `mailto:${emailLoja}?subject=${encodeURIComponent(
    "Orçamento - Barra de Apoio Reta"
  )}&body=${encodeURIComponent(resumoPedido)}`;

  return (
    <section className="py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ----------- GALERIA DE IMAGENS ----------- */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/10 to-transparent pointer-events-none" />
              <img
                src={imagemAtiva}
                alt="Exemplo de banheiro acessível com barras de apoio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setImagemAtiva(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border transition ${
                    imagemAtiva === img
                      ? "border-emerald-500 ring-2 ring-emerald-300"
                      : "border-slate-200 hover:border-emerald-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ----------- DETALHES + FORM ----------- */}
          <div className="space-y-6">
            {/* Título + badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                  NBR 9050
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                  ISO 9001
                </span>
                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold text-orange-700">
                  5 anos de garantia
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Barra de Apoio Reta
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Barra de apoio reta indicada para banheiros acessíveis em
                residências, hotéis, clínicas e hospitais. Fabricada de acordo
                com a norma{" "}
                <span className="font-semibold">ABNT/NBR 9050</span> por empresa
                certificada <span className="font-semibold">ISO 9001</span>,
                garantindo segurança, resistência e durabilidade.
              </p>

              <p className="mt-3 text-base font-semibold text-emerald-700">
                A partir de {formattedPrice}{" "}
                <span className="text-xs font-normal text-slate-500">
                  (valor aproximado, sem frete)
                </span>
              </p>
            </div>

            {/* Seleção de modelo/comprimento/quantidade */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-900">Modelo</label>
                <select
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="inox">Inox polido</option>
                  <option value="aluminio">Alumínio</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-900">
                  Comprimento (cm)
                </label>
                <select
                  value={comprimento}
                  onChange={(e) => setComprimento(e.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {comprimentosDisponiveis.map((c) => (
                    <option key={c} value={c}>
                      {c} cm
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-900">Quantidade</label>
                <input
                  type="number"
                  min={1}
                  value={quantidade}
                  onChange={(e) => setQuantidade(Number(e.target.value) || 1)}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Bloco do formulário de cliente */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3 text-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Dados para envio do orçamento
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Nome</label>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium">E-mail</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="seuemail@dominio.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Telefone / WhatsApp</label>
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium">Endereço completo</label>
                  <input
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Rua, número, bairro, cidade/UF"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium">Observações</label>
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  rows={3}
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Ex.: prazo desejado, dúvidas sobre instalação, etc."
                />
              </div>
            </div>

            {/* Resumo + botões */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <h2 className="text-sm font-semibold text-slate-900">
                Resumo do pedido
              </h2>
              <textarea
                readOnly
                value={resumoPedido}
                className="w-full h-32 text-xs rounded-xl border border-slate-300 p-2 bg-slate-50 focus:outline-none"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full bg-emerald-700 text-white text-xs font-semibold py-2.5 hover:bg-emerald-800 transition"
                >
                  Enviar pelo WhatsApp
                </a>

                <a
                  href={mailtoUrl}
                  className="flex-1 text-center rounded-full border border-emerald-700 text-emerald-700 text-xs font-semibold py-2.5 hover:bg-emerald-50 transition"
                >
                  Enviar por e-mail
                </a>
              </div>

              <p className="text-[11px] text-slate-500">
                * O valor apresentado é aproximado e pode variar conforme
                modelo, comprimento, quantidade e custo de frete. A equipe da
                UPGRADE retornará com o orçamento final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
