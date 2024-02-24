import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://65b3c2d4770d43aba47a5f75.mockapi.io',
});

export const getUsers = async (page = 1) => {
  const params = new URLSearchParams({
    page,
    limit: 3,
  });
  try {
    let { data } = await axiosInstance.get(`/users/?${params}`);
    data.forEach(element => {
      const options = { maximumFractionDigits: 2 };
      element.tweets = Intl.NumberFormat('en-US', options).format(
        element.tweets
      );

      element.isFollowing = false;
    });

    return data;
  } catch (error) {}
};
