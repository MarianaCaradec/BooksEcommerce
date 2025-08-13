"use client";
import { useState } from "react";

export default function ShippingCalculator() {
  const [cost, setCost] = useState<number | null>(null);

  const handleCalculate = () => {
    // Dummy logic for realistic estimate
    const weight = 2.5; // kg
    const length = 30; // cm
    const width = 20;
    const height = 15;
    const origin = "1010";
    const destination = "3100";

    const dimensionalWeight = (length * width * height) / 5000;
    const chargeableWeight = Math.max(weight, dimensionalWeight);
    const baseRate = 500; // base cost in ARS
    const distanceFactor = typeof origin === typeof destination ? 1 : 1.5;
    const estimatedCost = baseRate + chargeableWeight * 200 * distanceFactor;

    setCost(Math.round(estimatedCost));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#CFC5BA] via-[#CFC5BA]/80 to-white flex items-center justify-center px-6 py-10">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6">
        <h2 className="text-3xl font-bold text-[#AF611E] text-center">
          Calcular Envío
        </h2>

        {/* Origin ZIP */}
        <div className="flex flex-col">
          <label htmlFor="origin" className="text-[#AF611E] font-semibold mb-2">
            Código postal de origen
          </label>
          <input
            type="text"
            id="origin"
            placeholder="Ej: 1010"
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Destination ZIP */}
        <div className="flex flex-col">
          <label
            htmlFor="destination"
            className="text-[#AF611E] font-semibold mb-2"
          >
            Código postal de destino
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Ej: 3100"
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-3 gap-4">
          {["Largo", "Ancho", "Alto"].map((label, i) => (
            <div key={i} className="flex flex-col">
              <label className="text-[#AF611E] font-semibold mb-2">
                {label} (cm)
              </label>
              <input
                type="number"
                placeholder="0"
                className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
              />
            </div>
          ))}
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label htmlFor="weight" className="text-[#AF611E] font-semibold mb-2">
            Peso (kg)
          </label>
          <input
            type="number"
            id="weight"
            placeholder="Ej: 2.5"
            className="p-4 rounded-md bg-white text-[#AF611E] placeholder-[#AF611E]/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#AF611E]"
          />
        </div>

        {/* Calculate Button */}
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full py-3 rounded-md font-semibold bg-[#BF9A7C] text-[#AF611E] hover:bg-[#AF611E] hover:text-white ring-2 ring-[#AF611E] transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
        >
          Calcular costo
        </button>

        {/* Result Display */}
        {cost !== null && (
          <div className="text-center text-[#AF611E] font-semibold text-xl pt-4">
            Costo estimado: ${cost}
          </div>
        )}
      </form>
    </div>
  );
}
