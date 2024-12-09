import { makeRequest } from '@/backend/api/makeRequest';
import { test, expect } from '@playwright/test';

test.describe('Activities API Tests', () => {
  const baseEndpoint = '/api/v1/activities/';
  test('GET /api/v1/activities should return valid list of activities', async () => {
    const response = await makeRequest('GET', baseEndpoint);

    // Assert that the status code is 200
    expect(response.status).toBe(200);

    // Assert that each activity object has a non-empty id
    response.data.forEach((activity: { id: number }) => {
      expect(activity.id).toBeDefined();
      expect(activity.id).not.toBeNull();
    });
  });

  test('POST /api/v1/activities should create a new activity', async () => {
    const newActivity = {
      title: 'New Activity',
      dueDate: new Date().toISOString(),
      completed: false,
    };

    const response = await makeRequest('POST', baseEndpoint, newActivity);

    // Assert that the status code is 200
    expect(response.status).toBe(200);

    // Assert that the response contains the expected fields
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('dueDate');
    expect(response.data).toHaveProperty('completed');

    // Validate that the created activity matches the request data
    expect(response.data.title).toBe(newActivity.title);
    expect(response.data.dueDate).toBe(newActivity.dueDate);
    expect(response.data.completed).toBe(newActivity.completed);
  });
});
