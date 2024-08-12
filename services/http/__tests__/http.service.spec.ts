import axios from 'axios';

import { BASE_URL } from '@env';
import { createHttpClient } from '../http.service';

// Manually mock axios methods
jest.mock('axios');
const mockedAxiosGet = jest.fn();
const mockedAxiosPost = jest.fn();
//@ts-ignore
axios.mockImplementation((config) => {
  if (config.method === 'GET') {
    return mockedAxiosGet(config);
  }
  if (config.method === 'POST') {
    return mockedAxiosPost(config);
  }
  return Promise.reject(new Error('Unknown method'));
});

describe('createHttpClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make a GET request and resolve with data on success', async () => {
    const mockData = { data: 'test data' };
    mockedAxiosGet.mockResolvedValueOnce({ status: 200, data: mockData });

    const result = await createHttpClient<{ data: string }>({
      url: '/test',
      method: 'GET',
    });

    expect(result).toEqual(mockData);
    expect(mockedAxiosGet).toHaveBeenCalledWith({
      method: 'GET',
      url: `${BASE_URL}/test`,
      params: undefined,
      data: JSON.stringify(undefined),
    });
  });

  it('should make a POST request with data and resolve with response data', async () => {
    const mockData = { success: true };
    const postData = { key: 'value' };
    mockedAxiosPost.mockResolvedValueOnce({ status: 200, data: mockData });

    const result = await createHttpClient<{ success: boolean }>({
      url: '/post',
      method: 'POST',
      data: postData,
    });

    expect(result).toEqual(mockData);
    expect(mockedAxiosPost).toHaveBeenCalledWith({
      method: 'POST',
      url: `${BASE_URL}/post`,
      params: undefined,
      data: JSON.stringify(postData),
    });
  });

  it('should reject if the response status is not successful', async () => {
    mockedAxiosGet.mockResolvedValueOnce({ status: 404, data: {} });

    await expect(
      createHttpClient({
        url: '/error',
        method: 'GET',
      }),
    ).rejects.toEqual('Response is not success');
  });

  it('should reject with an error if the request fails', async () => {
    const mockError = new Error('Network Error');
    mockedAxiosGet.mockRejectedValueOnce(mockError);

    await expect(
      createHttpClient({
        url: '/error',
        method: 'GET',
      }),
    ).rejects.toThrow('Network Error');

    expect(mockedAxiosGet).toHaveBeenCalledWith({
      method: 'GET',
      url: `${BASE_URL}/error`,
      params: undefined,
      data: JSON.stringify(undefined),
    });
  });
});
