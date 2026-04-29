import { useState, useEffect } from 'react';
import { useClient } from '../hooks/useClient';

export default function AdminPage() {
  const [soatlar, setSoatlar] = useState([]);
  const supabase = useClient();

  useEffect(() => {
    const fetchSoatlar = async () => {
      const { data, error } = await supabase
        .from('soatlar')
        .select('*');
      if (data) {
        setSoatlar(data);
      }
    };
    fetchSoatlar();
  }, []);

  const handleAddSoat = async (e) => {
    e.preventDefault();
    const { nomi, tavsifi, narxi } = e.target;
    const { data, error } = await supabase
      .from('soatlar')
      .insert([{ nomi: nomi.value, tavsifi: tavsifi.value, narxi: narxi.value }]);
    if (data) {
      setSoatlar([...soatlar, data[0]]);
    }
  };

  const handleDeleteSoat = async (id) => {
    const { data, error } = await supabase
      .from('soatlar')
      .delete()
      .eq('id', id);
    if (data) {
      setSoatlar(soatlar.filter((soat) => soat.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleAddSoat} className="mb-4">
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Nomi:</label>
          <input type="text" name="nomi" className="p-2 rounded-2xl" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Tavsifi:</label>
          <textarea name="tavsifi" className="p-2 rounded-2xl" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2">Narxi:</label>
          <input type="number" name="narxi" className="p-2 rounded-2xl" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
          Qo'shish
        </button>
      </form>
      <ul className="list-none mb-4">
        {soatlar.map((soat) => (
          <li key={soat.id} className="bg-white dark:bg-black p-4 rounded-2xl mb-4">
            <h2 className="text-2xl font-bold mb-2">{soat.nomi}</h2>
            <p className="text-lg mb-2">{soat.tavsifi}</p>
            <p className="text-lg font-bold mb-2">{soat.narxi} so'm</p>
            <button onClick={() => handleDeleteSoat(soat.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl">
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}