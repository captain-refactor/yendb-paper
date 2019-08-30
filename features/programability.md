# Programability

Developer should be able to add validation functionality to database.

I've made some research. Goja module (github.com/dop251/goja) looks good enough. It's javascript runtime written in go.  


## Use cases

### 1: Product EAN validation

Given `product` like:
```yaml
Product:
    type: object
    properties:
      sku:
        type: string
      ean:
        type: string
```

In the real world, EAN value cannot be any string. It must be 13 characters long and validated using special mathematics computation.
We need to somehow check, what is valid ean on database level.