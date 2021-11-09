# [csum](https://csum.sany.one)
Calculate the checksum of a file using JavaScript.

## API documentation
The file `csum.js` exports one function called `csum` that takes two arguments: `file` and `algorithm` (default: `SHA-256`)

You must pass a `File` object to the `file` argument, and regarding the `algorithm` argument, you must pass a [supported algorithm](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms).

Once called, if everything is ok, it returns a string (the calculated file hash hex). If everything is not ok, it throws an error.

## Usage
```html
<input type='file' />
```
```js
import { csum } from './csum.js'

const input = document.querySelector('input')

input.addEventListener('change', async () => {
   const [file] = input.files
   console.log(file.name, await csum(file))
})
```

## Installation
`npm i csum`

## License
[AGPL-3.0](LICENSE)
