# Deployability
 
Database schema and functions must be deployable.
Deployment operation must be idempotent.
Deployment is successful after all db nodes are updated.

<HR>

## Use cases

### 1: Products
We have collection of `products`
```yaml
Product:
    type: object
    properties:
      name: 
        type: string
      sku: 
        type: string
      company: 
        type: pointer

```
New requirements is that `product` has property stock and if product gets sold, the stock lowers by one.

As a developer, we need to somehow add stock property to product before it gets used. 
