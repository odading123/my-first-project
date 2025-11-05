import { useState } from 'react';
import axios from 'axios';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('/api/ask', { message });
      setResponse(data.response);
    } catch (err) {
      setError('⚠️ Unable to connect to AI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 m-4 w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
