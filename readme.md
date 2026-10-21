<a id="api-ansi-escape-sequences"></a>

- [ansi-escape-sequences](#api-ansi-escape-sequences) <sup><mark>Package</mark></sup>
  - [style](#api-style) <sup><mark>Enum, Named Export</mark></sup>
  - [rgb (r, g, b)](#api-rgb) <sup><mark>Function, Named Export</mark></sup>
  - [bgRgb (r, g, b)](#api-bgRgb) <sup><mark>Function, Named Export</mark></sup>

## ansi-escape-sequences

Something

**Type**: Package





<a id="api-style"></a>

### style

Various formatting styles (aka Select Graphic Rendition codes).

**Type**: Enum, Named Export



**Example**

```
console.log(ansi.style.red + 'this is red' + ansi.style.reset)
```

<a id="api-rgb"></a>

### rgb (r, g, b)

Returns a 24-bit "true colour" foreground colour escape sequence.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

r | Number | Red value.
g | Number | Green value.
b | Number | Blue value.

**Example**

```
> rgb(120, 0, 120)
'\u001b[38;2;120;0;120m'
```

<a id="api-bgRgb"></a>

### bgRgb (r, g, b)

Returns a 24-bit "true colour" background colour escape sequence.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

r | Number | Red value.
g | Number | Green value.
b | Number | Blue value.

**Example**

```
> bgRgb(120, 0, 120)
'\u001b[48;2;120;0;120m'
```

