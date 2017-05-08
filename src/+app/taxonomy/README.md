INTRODUCTION
------------
 
Module is high-level unit that exports some low-level API classes from
`code\modules`. Or by analogy with the Angular npm package install core API,
basic modules and themes via npm package like  `@angie/core`, `@angie/theme`
or `@angie/module`. For example `Taxonomy` module:

``` javascript
//  to interact with the Drupal core.
import { * }             from '@angie/api/module'
//  determines who can do what to which nodes
import { NodeDelete,
         NodeInsert,
         NodeUpdate,
         SelectNodes }   from '@angie/modules/node';
//  to attach custom data fields to Taxonomy.
import { FieldInfo,
         FieldIsEempty } from '@angie/modules/field';
//  to define the navigation menus, and route page requests.
import { GetItem,
         GetNames,
         GetObject }     from '@angie/includes/menu';
//  to processing and display taxonomy forms.
import { * }             from '@angie/includes/form';
```


```
    +-- app >> custom modules
    |   +-- taxonomy
    |       +-- taxonomy.module.ts
    |       +-- taxonomy.component.ts
    |       +-- taxonomy.template.html
    |   +-- user
    |       +-- user.module.ts
    |       +-- user.component.ts
    |       +-- user.template.html
    +-- code
    |   +-- modules
    |       +-- field
    |           +-- field.module.ts
    |           +-- field.component.ts
    |       +-- node
    |           +-- node.module.ts
    |           +-- node.component.ts
    |   +-- tests
    |       +-- some.specs.js
    |       +-- e2e.consig.js
    |   +-- themes
    |       +-- aberdeen
    |           ...
    |       +-- barsik
    |           ...
    |   ...
    +-- package.json
```
