## Schema definition
Schemas has form of yaml or json structure. It is simpler than own language and with existing tooling.

### Schema structure

```typescript
interface Document {
    yendb: string;
    models?: {
        [key: string]: Schema;
    };
    root: NonContainerSchema;
}

type Type =
    | 'boolean'
    | 'object'
    | 'float'
    | 'string'
    | 'integer'
    | 'map'
    | 'array'
    | 'pointer';
type Schema = NonContainerSchema | ContainerSchema | PointerSchema;

type ContainerSchema = ArraySchema | MapSchema;

type NonContainerSchema = ObjectSchema | StringSchema | BooleanSchema | FloatSchema | IntegerSchema;

interface ObjectSchema extends BaseSchema, Enumerable {
    type: 'object';
    properties?: {
        [name: string]: Schema;
    };
}

interface StringSchema extends BaseSchema, Enumerable {
    type: 'string';
}

interface BooleanSchema extends BaseSchema, Enumerable {
    type: 'boolean';
}

interface FloatSchema extends BaseSchema, Enumerable {
    type: 'float';
}

interface IntegerSchema extends BaseSchema, Enumerable {
    type: 'integer';
}

interface MapSchema extends BaseSchema, Enumerable {
    type: 'map';
    items: Schema;
}

interface PointerSchema extends BaseSchema, Enumerable {
    type: 'pointer';
    ofType: string
}

interface ArraySchema extends BaseSchema {
    type: 'array';
    items: Schema;
}

interface Enumerable {
    enum?: any[];
    items: Schema;
}

interface BaseSchema {
    type: Type;
    title?: string;
    description?: string;
    default?: any;
    required?: string[];
    nullable?: boolean;
    deprecated?: boolean;
}
```
