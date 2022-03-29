import { inject } from "vue";

export interface Handlers {
  request: any;
  response: any;
}

/**
 * 根据注入的isServer判断是否是node服务端并执行cb回调（requestHandler服务端注入的参数）
 * @param cb 回调
 * @author LiQingSong
 */
export default async function useServerCreated(
  cb: (handlers: Handlers) => Promise<void>
): Promise<void> {
  const isServer: boolean = inject<boolean>("isServer", false);
  const handlers: Handlers = inject<Handlers>("requestHandler", {
    request: null,
    response: null,
  });
  if (isServer === true) {
    await cb(handlers);
  }
}
