declare namespace pusher {
  export interface Config {
    readonly appId: string;
    readonly key: string;
    readonly secret: string;
    readonly encrypted?: boolean;
    readonly host?: string;
    readonly port?: number;
    readonly cluster?: string;
  }
}

declare module 'pusher' {
  class Pusher {
    constructor(options: pusher.Config);

    public trigger(channels: string | string[], event: string, data: Object, socketId?: string, callback?: (error: string | void) => void): void;
    public trigger(channels: string | string[], event: string, data: Object, callback?: (error: string | void) => void): void
    public authenticate(socketId: string, channel: string, data?: Object): void;
    
    public static forURL(pusherUrl: string, options?: pusher.Config): Pusher;
    public static forCluster(cluster: string, options?: pusher.Config): Pusher;
  }
  
  export = Pusher;
}