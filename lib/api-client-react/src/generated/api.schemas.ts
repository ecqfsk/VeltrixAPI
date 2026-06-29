// Types from OpenAPI schema
export interface HealthStatus {
  status: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string | null;
  role: string;
  plan: string;
  emailVerified?: boolean;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ApiKey {
  id: number;
  name: string;
  keyPreview: string;
  permissions: string[];
  status: string;
  rateLimit: number;
  requestCount: number;
  createdAt: string;
}

export interface ApiKeyInput {
  name: string;
  permissions?: string[];
  rateLimit?: number;
}

export interface ApiKeyCreated {
  id: number;
  name: string;
  key: string;
  keyPreview: string;
  permissions: string[];
  status: string;
  rateLimit: number;
  createdAt: string;
}

export interface ManagedApi {
  id: number;
  name: string;
  description: string;
  version: string;
  status: string;
  category: string;
  requestCount: number;
  uptime: number;
  isPublic: boolean;
  baseUrl?: string | null;
  createdAt: string;
}

export interface ApiInput {
  name: string;
  description: string;
  version?: string;
  category?: string;
  baseUrl?: string;
  isPublic?: boolean;
}

export interface ApiEndpoint {
  id: number;
  apiId: number;
  method: string;
  path: string;
  description: string;
  deprecated: boolean;
  authRequired: boolean;
}

export interface ApiEndpointInput {
  method: string;
  path: string;
  description: string;
  deprecated?: boolean;
  authRequired?: boolean;
}

export interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  requestLimit: number;
  rateLimit: number;
  features: string[];
  isActive: boolean;
}

export interface PlanInput {
  name: string;
  description: string;
  price: number;
  requestLimit: number;
  rateLimit: number;
  features: string[];
}

export interface RequestLog {
  id: number;
  apiKeyId: number;
  apiKeyName?: string;
  method: string;
  endpoint: string;
  statusCode: number;
  latency: number;
  ip?: string | null;
  userAgent?: string | null;
  timestamp: string;
}

export interface LogList {
  logs: RequestLog[];
  total: number;
}

export interface DashboardStats {
  totalRequests: number;
  successRate: number;
  avgLatency: number;
  activeApiKeys: number;
  activeApis: number;
  totalUsers: number;
  requestsToday: number;
  requestsThisMonth?: number;
  uptime: number;
  errorRate?: number;
  rateLimitedRate?: number;
}

export interface TimeSeriesPoint {
  timestamp: string;
  value: number;
  label?: string | null;
}

export interface ApiStat {
  id: number;
  name: string;
  requestCount: number;
  successRate: number;
  avgLatency?: number;
}

export interface StatusBreakdown {
  success: number;
  error: number;
  rateLimited: number;
  total: number;
}

export interface Webhook {
  id: number;
  url: string;
  events: string[];
  status: string;
  secret?: string | null;
  deliveryCount: number;
  failureCount: number;
  lastDeliveredAt?: string | null;
  createdAt: string;
}

export interface WebhookInput {
  url: string;
  events: string[];
  secret?: string | null;
}

export interface WebhookTestResult {
  success: boolean;
  statusCode: number;
  latency: number;
  error?: string | null;
}

export interface MarketplaceApi {
  id: number;
  name: string;
  description: string;
  category: string;
  version: string;
  requestCount: number;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  tags?: string[];
  createdAt: string;
}
