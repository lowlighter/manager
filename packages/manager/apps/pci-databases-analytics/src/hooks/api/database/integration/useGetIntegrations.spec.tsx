import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import * as databaseAPI from '@/data/api/database/integration.api';
import * as database from '@/types/cloud/project/database';
import { QueryClientWrapper } from '@/__tests__/helpers/wrappers/QueryClientWrapper';
import { mockedIntegrations } from '@/__tests__/helpers/mocks/integrations';
import { useGetIntegrations } from './useGetIntegrations.hook';

vi.mock('@/data/api/database/integration.api', () => ({
  getServiceIntegrations: vi.fn(),
  getServiceCapabilitiesIntegrations: vi.fn(),
  addIntegration: vi.fn(),
  deleteIntegration: vi.fn(),
}));

describe('useGetIntegrations', () => {
  it('should return service integrations data', async () => {
    const projectId = 'projectId';
    const engine = database.EngineEnum.mysql;
    const serviceId = 'serviceId';

    vi.mocked(databaseAPI.getServiceIntegrations).mockResolvedValue([
      mockedIntegrations,
    ]);

    const { result } = renderHook(
      () => useGetIntegrations(projectId, engine, serviceId),
      { wrapper: QueryClientWrapper },
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual([mockedIntegrations]);
      expect(databaseAPI.getServiceIntegrations).toHaveBeenCalledWith({
        projectId,
        engine,
        serviceId,
      });
    });
  });
});