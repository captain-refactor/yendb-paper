## Schema definition
Schemas has form of yaml or json structure. It is simpler than own language and with existing tooling.

### Schema structure

```typescript
interface Doc {
    models?: Record<string,Model>;
}

interface Model {
    
    properties: Record<string, Property> 
}
interface Property{
    type: Type;
}
interface Ref {
    $ref: string;
}


type Type = Model | 'string' | 'integer' | Ref
```
