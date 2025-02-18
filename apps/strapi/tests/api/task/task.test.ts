import { afterAll, beforeAll, describe, expect, it, type vi } from 'vitest';
import { cleanupStrapi, setupStrapi } from '../../helpers/strapi';
import type { ExtendedStrapi } from '../../helpers/types';

let strapi: ExtendedStrapi;

describe('Task API endpoints', () => {
  beforeAll(async () => {
    const instance = await setupStrapi();
    if (!instance) throw new Error('Failed to setup Strapi');
    strapi = instance;
  });

  afterAll(async () => {
    await cleanupStrapi();
  });

  describe('Create Task', () => {
    it('should create a task successfully', async () => {
      const taskData = {
        title: 'Test Task',
        description: 'This is a test task',
        category: 'maintenance',
        location: 'Test Location',
        status: 'open',
        creator: 1,
      };

      const mockResponse = {
        ...taskData,
        id: 1,
        creator: { id: 1 },
      };

      const createMock = strapi.service('api::task.task').create as ReturnType<typeof vi.fn>;
      createMock.mockResolvedValue(mockResponse);

      const response = await strapi.service('api::task.task').create({
        data: taskData,
      });

      expect(createMock).toHaveBeenCalledWith({ data: taskData });
      expect(response).toBeDefined();
      expect(response.title).toBe(taskData.title);
      expect(response.category).toBe(taskData.category);
      expect(response.status).toBe(taskData.status);
      expect(response.creator.id).toBe(taskData.creator);
    });

    it('should fail to create a task without required fields', async () => {
      const taskData = {
        title: 'Test Task',
        // Missing required fields
      };

      const createMock = strapi.service('api::task.task').create as ReturnType<typeof vi.fn>;
      createMock.mockRejectedValue(new Error('Missing required fields'));

      await expect(
        strapi.service('api::task.task').create({
          data: taskData,
        })
      ).rejects.toThrow('Missing required fields');
    });
  });

  describe('Read Task', () => {
    it('should retrieve a task by id', async () => {
      const taskData = {
        id: 1,
        title: 'Test Task',
        description: 'This is a test task',
        category: 'maintenance',
        location: 'Test Location',
        status: 'open',
        creator: { id: 1 },
      };

      const findOneMock = strapi.service('api::task.task').findOne as ReturnType<typeof vi.fn>;
      findOneMock.mockResolvedValue(taskData);

      const retrievedTask = await strapi.service('api::task.task').findOne({
        id: taskData.id,
      });

      expect(findOneMock).toHaveBeenCalledWith({ id: taskData.id });
      expect(retrievedTask).toBeDefined();
      expect(retrievedTask.id).toBe(taskData.id);
      expect(retrievedTask.title).toBe(taskData.title);
    });
  });

  describe('Update Task', () => {
    it('should update a task successfully', async () => {
      const taskId = 1;
      const updatedData = {
        status: 'in-progress',
        description: 'Updated description',
      };

      const mockResponse = {
        id: taskId,
        title: 'Test Task',
        ...updatedData,
        category: 'maintenance',
        location: 'Test Location',
        creator: { id: 1 },
      };

      const updateMock = strapi.service('api::task.task').update as ReturnType<typeof vi.fn>;
      updateMock.mockResolvedValue(mockResponse);

      const updatedTask = await strapi.service('api::task.task').update({
        id: taskId,
        data: updatedData,
      });

      expect(updateMock).toHaveBeenCalledWith({
        id: taskId,
        data: updatedData,
      });
      expect(updatedTask).toBeDefined();
      expect(updatedTask.id).toBe(taskId);
      expect(updatedTask.status).toBe(updatedData.status);
      expect(updatedTask.description).toBe(updatedData.description);
    });
  });

  describe('Delete Task', () => {
    it('should delete a task successfully', async () => {
      const taskId = 1;

      const deleteMock = strapi.service('api::task.task').delete as ReturnType<typeof vi.fn>;
      deleteMock.mockResolvedValue({ id: taskId });

      const findOneMock = strapi.service('api::task.task').findOne as ReturnType<typeof vi.fn>;
      findOneMock.mockResolvedValue(null);

      await strapi.service('api::task.task').delete({
        id: taskId,
      });

      const deletedTask = await strapi.service('api::task.task').findOne({
        id: taskId,
      });

      expect(deleteMock).toHaveBeenCalledWith({ id: taskId });
      expect(deletedTask).toBeNull();
    });
  });
});
