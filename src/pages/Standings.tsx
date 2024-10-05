import { useState, useEffect } from 'react';
import axios from 'axios';

interface Driver {
  position: string;
  Driver: {
    givenName: string;
    familyName: string;
  };
  Constructors: Array<{
    name: string;
  }>;
  points: string;
}

export function Standings() {
  const [standings, setStandings] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/current/driverStandings.json'
        );
        setStandings(
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch standings data');
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) return <div className='text-center py-8'>Loading...</div>;
  if (error)
    return <div className='text-center py-8 text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>F1 Driver Standings</h1>
      <div className='bg-gray-800 shadow-xl rounded-lg overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-700'>
              <th className='px-4 py-2 text-left text-gray-200'>Position</th>
              <th className='px-4 py-2 text-left text-gray-200'>Driver</th>
              <th className='px-4 py-2 text-left text-gray-200'>Team</th>
              <th className='px-4 py-2 text-left text-gray-200'>Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((driver) => (
              <tr key={driver.position} className='border-b border-gray-700'>
                <td className='px-4 py-2 text-gray-300'>{driver.position}</td>
                <td className='px-4 py-2 text-gray-300'>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</td>
                <td className='px-4 py-2 text-gray-300'>
                  {driver.Constructors[0].name}
                </td>
                <td className='px-4 py-2 text-gray-300'>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
