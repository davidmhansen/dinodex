const useRouter = jest.fn();
module.exports = {
  useRouter,
  Router: {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
  },
};
