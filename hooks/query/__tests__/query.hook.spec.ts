import { HTTP_METHOD } from '@/constants';
import { fetchProductDetails, fetchProductList, fetchProductListTest } from '@/services';
import { createHttpClient } from '@/services/http';


// Mock the createHttpClient function
jest.mock('@/services/http', () => ({
  createHttpClient: jest.fn(),
}));

const mockedCreateHttpClient = createHttpClient as jest.MockedFunction<typeof createHttpClient>;

describe('fetchProduct functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call createHttpClient with correct arguments in fetchProductListTest', () => {
    fetchProductListTest();

    expect(mockedCreateHttpClient).toHaveBeenCalledWith({
      url: '/product-list-lite',
      method: HTTP_METHOD.GET,
    });
  });

  it('should call createHttpClient with correct arguments in fetchProductList', async () => {
    await fetchProductList();

    expect(mockedCreateHttpClient).toHaveBeenCalledWith({
      url: '/product-list-large',
      method: HTTP_METHOD.GET,
    });
  });

  it('should call createHttpClient with correct arguments in fetchProductDetails', async () => {
    await fetchProductDetails();

    expect(mockedCreateHttpClient).toHaveBeenCalledWith({
      url: '/product',
      method: HTTP_METHOD.GET,
    });
  });
});
