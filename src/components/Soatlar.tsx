import { useState } from 'react';

interface Soat {
  id: number;
  nomi: string;
  tavsifi: string;
  narxi: number;
}

interface SoatlarProps {
  soatlar: Soat[];
}

export default function Soatlar({ soatlar }: SoatlarProps) {
  const [filteredSoatlar, setFilteredSoatlar] = useState(soatlar);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredSoatlar.map((soat) => (
        <div key={soat.id} className="bg-white dark:bg-black p-4 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">{soat.nomi}</h2>
          <p className="text-lg mb-2">{soat.tavsifi}</p>
          <p className="text-lg font-bold mb-2">{soat.narxi} so'm</p>
        </div>
      ))}
    </div>
  );
}