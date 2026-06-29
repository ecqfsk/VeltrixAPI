// Stubs generated manually
import { useQuery, useMutation } from "@tanstack/react-query";
import { customFetch } from "../custom-fetch";

declare const __BASE_URL__: string | undefined;
const BASE = (typeof __BASE_URL__ !== "undefined" ? __BASE_URL__ : "") || "";

// API Keys
export const useListApiKeys = (queryParams?: any) => useQuery<any[]>({
  queryKey: ["apiKeys", queryParams],
  queryFn: () => customFetch(`${BASE}api/api-keys${queryParams?.status ? `?status=${queryParams.status}` : ""}`),
  ...queryParams?.query,
}) as any;

export const useCreateApiKey = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/api-keys`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useDeleteApiKey = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/api-keys/${id}`, { method: "DELETE" }),
});

export const useRevokeApiKey = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/api-keys/${id}/revoke`, { method: "POST" }),
});

export const useRotateApiKey = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/api-keys/${id}/rotate`, { method: "POST" }),
});

export const getListApiKeysQueryKey = () => ["apiKeys"];

// APIs
export const useListApis = () => useQuery<any[]>({ queryKey: ["apis"], queryFn: () => customFetch(`${BASE}api/apis`) }) as any;

export const useGetApi = (id: number, opts?: any) => useQuery<any>({
  queryKey: ["api", id],
  queryFn: () => customFetch(`${BASE}api/apis/${id}`),
  enabled: !!id && opts?.query?.enabled !== false,
}) as any;

export const useCreateApi = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/apis`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useDeleteApi = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/apis/${id}`, { method: "DELETE" }),
});

export const usePublishApi = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/apis/${id}/publish`, { method: "POST" }),
});

export const getListApisQueryKey = () => ["apis"];

// API Endpoints
export const useListApiEndpoints = (apiId: number, opts?: any) => useQuery<any[]>({
  queryKey: ["apiEndpoints", apiId],
  queryFn: () => customFetch(`${BASE}api/apis/${apiId}/endpoints`),
  enabled: !!apiId && opts?.query?.enabled !== false,
}) as any;

export const useCreateApiEndpoint = () => useMutation({
  mutationFn: ({ id, data }: any) => customFetch(`${BASE}api/apis/${id}/endpoints`, { method: "POST", body: JSON.stringify(data) }),
});

export const useDeleteApiEndpoint = () => useMutation({
  mutationFn: ({ id, endpointId }: any) => customFetch(`${BASE}api/apis/${id}/endpoints/${endpointId}`, { method: "DELETE" }),
});

export const getListApiEndpointsQueryKey = (apiId: number) => ["apiEndpoints", apiId];

// Logs
export const useListLogs = (queryParams?: any) => useQuery<{ logs: any[]; total: number }>({
  queryKey: ["logs", queryParams],
  queryFn: () => customFetch(`${BASE}api/logs?${new URLSearchParams(queryParams || {}).toString()}`),
}) as any;

// Analytics
export const useGetDashboardStats = () => useQuery<any>({
  queryKey: ["dashboardStats"],
  queryFn: () => customFetch(`${BASE}api/analytics/dashboard`),
}) as any;

export const useGetRequestTimeSeries = (params?: any) => useQuery<any[]>({
  queryKey: ["timeSeries", params],
  queryFn: () => customFetch(`${BASE}api/analytics/time-series?period=${params?.period || "24h"}`),
}) as any;

export const useGetTopApis = () => useQuery<any[]>({
  queryKey: ["topApis"],
  queryFn: () => customFetch(`${BASE}api/analytics/top-apis`),
}) as any;

export const useGetStatusBreakdown = () => useQuery<any>({
  queryKey: ["statusBreakdown"],
  queryFn: () => customFetch(`${BASE}api/analytics/status-breakdown`),
}) as any;

// Marketplace
export const useListMarketplace = (queryParams?: any) => useQuery<any[]>({
  queryKey: ["marketplace", queryParams],
  queryFn: () => customFetch(`${BASE}api/marketplace?${new URLSearchParams(queryParams || {}).toString()}`),
}) as any;

// Webhooks
export const useListWebhooks = () => useQuery<any[]>({ queryKey: ["webhooks"], queryFn: () => customFetch(`${BASE}api/webhooks`) }) as any;

export const useCreateWebhook = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/webhooks`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useDeleteWebhook = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/webhooks/${id}`, { method: "DELETE" }),
});

export const useTestWebhook = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/webhooks/${id}/test`, { method: "POST" }),
});

export const getListWebhooksQueryKey = () => ["webhooks"];

// Plans
export const useListPlans = () => useQuery<any[]>({ queryKey: ["plans"], queryFn: () => customFetch(`${BASE}api/plans`) }) as any;

export const useCreatePlan = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/plans`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useDeletePlan = () => useMutation({
  mutationFn: ({ id }: any) => customFetch(`${BASE}api/plans/${id}`, { method: "DELETE" }),
});

export const getListPlansQueryKey = () => ["plans"];

// Auth
export const useLogin = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/auth/login`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useRegister = () => useMutation({
  mutationFn: (data: any) => customFetch(`${BASE}api/auth/register`, { method: "POST", body: JSON.stringify(data.data || data) }),
});

export const useLogout = () => useMutation({
  mutationFn: () => customFetch(`${BASE}api/auth/logout`, { method: "POST" }),
});

export const useGetMe = () => useQuery({
  queryKey: ["me"],
  queryFn: () => customFetch(`${BASE}api/auth/me`),
}) as any;
