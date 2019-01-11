Sizes and colors:

```js
const { colors, sizes } = require('.');

<React.Fragment>
  {sizes.map((size) => (
    <div key={size} style={{ paddingBottom: '1em' }}>
      {colors.map((color) => (
        <Badge key={color} size={size} color={color}>
          {size} {color}
        </Badge>
      ))}
    </div>
  ))}
</React.Fragment>;
```

Uppercase:

```js
<Badge isUppercase>Badge</Badge>
```
