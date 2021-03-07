import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addOne = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const addVote = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, {
    ...anecdote,
    votes: anecdote.votes + 1 });
  return response.data;
};

export default { getAll, addOne, addVote };
