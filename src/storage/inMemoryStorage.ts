import { ChatContext, ContextStorage, Identifier } from "./types.js";

export class InMemoryStorage implements ContextStorage {
    storage: Map<Identifier, ChatContext>

    constructor() {
        this.storage = new Map()
    }

    async get(identifier: Identifier): Promise<ChatContext | null> {
        const context = this.storage.get(identifier)

        return context || null
    }

    async set(identifier: Identifier, context: ChatContext): Promise<void> {
        this.storage.set(identifier, context)
    }

    async reset(identifier: Identifier): Promise<void> {
        this.storage.delete(identifier)
    }
}