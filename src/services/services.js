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
    const { data } = await axiosInstance.get(`/users/?${params}`);
    return data;
  } catch (error) {}
};

export const updateUser = async item => {
  try {
    const updatedUser = {
      isFollowing: !item.isFollowing,
      followers: item.isFollowing
        ? Number(item.followers) - 1
        : Number(item.followers) + 1,
      avatar: item.avatar,
      id: item.id,
      user: item.user,
      tweets: item.tweets,
    };

    const { data } = await axiosInstance.put(
      `/users/${updatedUser.id}`,
      updatedUser
    );
    return data;
  } catch (error) {
    return error;
  }
};
