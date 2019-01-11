Sizes, designs and disabled state:

```js
const { sizes, designs } = require('.');

<React.Fragment>
  {sizes.map((size) => (
    <div key={size} style={{ paddingBottom: '1em' }}>
      {designs.map((design) => (
        <div key={size} style={{ paddingBottom: '.5em' }}>
          <Button design={design} size={size} onClick={() => alert('click')}>
            {design} {size}
          </Button>{' '}
          <Button
            disabled
            design={design}
            size={size}
            onClick={() => alert('click')}
          >
            {design} {size} disabled
          </Button>
        </div>
      ))}
    </div>
  ))}
</React.Fragment>;
```

Full width button:

```js
<Button fullWidth>Full width button</Button>
```

Button as link:

```js
<React.Fragment>
  <Button
    element="a"
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => alert('click')}
  >
    Button
  </Button>

  <Button
    fullWidth
    element="a"
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => alert('click')}
  >
    Button
  </Button>
</React.Fragment>
```

Button with custom element:

```js
<Button
  element={CustomComponent}
  onClick={() => alert('click button with custom element')}
>
  Button
</Button>
```

Disabled button with custom element:

```js
<Button
  disabled
  element={CustomComponent}
  onClick={() => alert('click button with custom element')}
>
  Button
</Button>
```
