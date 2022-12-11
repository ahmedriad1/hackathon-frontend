import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function useGetResponse(type: 'twitter' | 'playht') {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const fetchResponse = async (search: string) => {
    setLoading(true);

    try {
      const res = await (
        await fetch(`https://hackathon-yhed.onrender.com/ask/${type}`, {
          method: 'POST',
          body: JSON.stringify({ question: search }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).text();

      if (res.startsWith('ANSWER: None of the Above.'))
        setResult('I should forward this to a human reviewer');
      else setResult(res);
    } catch (e) {
      toast.error('Something went wrong!');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { loading, result, fetchResponse };
}
