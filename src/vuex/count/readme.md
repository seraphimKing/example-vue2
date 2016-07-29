# 一个数据源

## ES5

```
/onesource
  - state.js
    {
        state: {},
        mutations: {}
    }

  - action.js // 在需要的时候混合
    {
        vuex: {
            getters: {},
            actions: {}
        }
    }
```

## ES6

```
onesource.js

const state = {
    state: {},
    mutations: {}
}

const vuex = {
        vuex: {
            getters: {},
            actions: {}
        }
    }

export = state
export vuex

import { vuex, state } from 'onesource.js'
```
