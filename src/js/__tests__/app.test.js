import { fetchData } from '../http';
import { getLevel } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('get level', () => {
  const response = { status: 'ok', level: 2 };
  fetchData.mockReturnValue(response);
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('get level', () => {
  const response = {};
  fetchData.mockReturnValue(response);
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
