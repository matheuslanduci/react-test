export default {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
}
