export interface Document {
    yendb: string;
    models?: {
        [key: string]: SchemaObject;
    };
    root: NonArraySchemaObject
}

export type NonArraySchemaObjectType = 'boolean' | 'object' | 'float' | 'string' | 'integer';
export type ArraySchemaObjectType = 'array';
export type SchemaObject = ArraySchemaObject | NonArraySchemaObject;

export interface ArraySchemaObject extends BaseSchemaObject {
    type: ArraySchemaObjectType;
    items: SchemaObject;
}

export interface NonArraySchemaObject extends BaseSchemaObject {
    type: NonArraySchemaObjectType;
}

export interface BaseSchemaObject {
    title?: string;
    description?: string;
    default?: any;
    multipleOf?: number;
    additionalProperties?: boolean | SchemaObject;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: any[];
    properties?: {
        [name: string]: SchemaObject;
    };
    allOf?: Array<SchemaObject>;
    oneOf?: Array<SchemaObject>;
    anyOf?: Array<SchemaObject>;
    not?: SchemaObject;
    nullable?: boolean;
    discriminator?: DiscriminatorObject;
    deprecated?: boolean;
}

export interface DiscriminatorObject {
    propertyName: string;
    mapping?: {
        [value: string]: string;
    };
}