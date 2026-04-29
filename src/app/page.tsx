import { useState, useEffect } from 'react';
import { useClient } from '../hooks/useClient';
import { Soatlar } from '../components/Soatlar';

export default function HomePage() {
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

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Soat Soatdigon</h1>
      <Soatlar soatlar={soatlar} />
    </div>
  );
}