import { makeRequest } from '@/backend/api/makeRequest';
import { test, expect } from '@playwright/test';

test.describe('Activities API Tests', () => {
  test('GET /api/v1/activities should return valid data', async () => {
    const response = await makeRequest('GET', '/api/v1/activities');

    // Assert status code
    expect(response.status).toBe(200);

    // Assert each object has a non-empty id
    response.data.forEach((activity: { id: number }) => {
      expect(activity.id).toBeDefined();
      expect(activity.id).not.toBeNull();
    });
  });
});
