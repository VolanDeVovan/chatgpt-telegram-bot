export type Identifier = string

export interface ChatContext {
    conversationId: string
    parentMessageId: string
}

export interface ContextStorage {
    set(identifier: Identifier, context: ChatContext): Promise<void>
    get(identifier: Identifier): Promise<ChatContext | null>
    reset(identifier: Identifier): Promise<void>
}
