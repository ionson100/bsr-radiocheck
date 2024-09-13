# bsr-radiocheck

> React component tooltip

[![NPM](https://img.shields.io/npm/v/bsr-radiocheck.svg)](https://www.npmjs.com/package/bsr-radiocheck-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bsr-radiocheck
```

## Usage

```tsx
import React from "react";
import {RadioCheck} from "bsr-radiocheck";
import 'bsr-radiocheck/dist/index.css'
export function App(){
    return<div>
        <RadioCheck
            id={"check-1"}
            checked={true}
            labelContent={'Simple CheckBox'}
            onChange={(t,r)=>{
                console.log("id: "+t.getAttribute('id')+" checked: "+r)
            }}
        />
    </div>
}
```

## License

MIT © [ionson100](https://github.com/ionson100)



[Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=12-1).
