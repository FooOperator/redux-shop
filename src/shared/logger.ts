export type MessageType = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

export const customLogger = (namespace: string, message: string, type: MessageType = 'INFO') => {
    console.log(`[${namespace}] (${type}): ${message}`);
};