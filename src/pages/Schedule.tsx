import { useState, useEffect } from 'react';
import axios from 'axios';

interface Race {
  round: string;
  raceName: string;
  date: string;
  time: string;
  Circuit: {
    circuitName: string;
  };
}

export function Schedule() {
  const [schedule, setSchedule] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/2024.json');
        setSchedule(response.data.MRData.RaceTable.Races);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch schedule data');
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) return <div className='text-center py-8'>Loading...</div>;
  if (error)
    return <div className='text-center py-8 text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>F1 Race Schedule</h1>
      <div className='bg-gray-800 shadow-xl rounded-lg overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-700'>
              <th className='px-4 py-2 text-left text-gray-200'>Round</th>
              <th className='px-4 py-2 text-left text-gray-200'>Grand Prix</th>
              <th className='px-4 py-2 text-left text-gray-200'>Circuit</th>
              <th className='px-4 py-2 text-left text-gray-200'>Date</th>
              <th className='px-4 py-2 text-left text-gray-200'>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((race) => (
              <tr key={race.round} className='border-b border-gray-700'>
                <td className='px-4 py-2 text-gray-300'>{race.round}</td>
                <td className='px-4 py-2 text-gray-300'>{race.raceName}</td>
                <td className='px-4 py-2 text-gray-300'>
                  {race.Circuit.circuitName}
                </td>
                <td className='px-4 py-2 text-gray-300'>{race.date}</td>
                <td className='px-4 py-2 text-gray-300'>{race.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
