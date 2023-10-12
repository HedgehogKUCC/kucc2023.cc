export interface ICustomRouterHandlerError extends Error {
  status: number;
  message: string;
}

export interface ICustomServerListenerError extends Error {
  syscall: string;
  code: string;
}