Default:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input.Uncontrolled element={element} label="E-mail" />
  </Row>
));
```

With placeholder:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input.Uncontrolled
      element={element}
      label="E-mail"
      placeholder="example@example.com"
    />
  </Row>
));
```

With description:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input.Uncontrolled
      element={element}
      label="E-mail"
      description="example@example.com"
    />
  </Row>
));
```

With errors:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input.Uncontrolled
      element={element}
      label="E-mail"
      errors={[
        'must not be empty',
        'must contain @ character',
        'must be at least 3 characters long',
      ]}
    />
  </Row>
));
```

With placeholder, description and errors:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input.Uncontrolled
      element={element}
      label="E-mail"
      placeholder="example@example.com"
      description="Your e-mail"
      errors={[
        'must not be empty',
        'must contain @ character',
        'must be at least 3 characters long',
      ]}
    />
  </Row>
));
```

Disabled:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

['input', 'textarea'].map((element) => (
  <Row key={element}>
    <Input
      disabled
      element={element}
      label="E-mail"
      value="example@example.com"
    />
  </Row>
));
```

type=number:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

<Row>
  <Input type="number" label="Amount" value="50" />
</Row>;
```

Custom label:

```js
const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

<Row>
  <Input
    type="number"
    label={<span style={{ color: 'green' }}>Amount</span>}
    value="50"
  />
</Row>;
```
