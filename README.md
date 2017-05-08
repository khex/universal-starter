# Todo list

### Bugs
 - Рецепт рендерится на сервере и не имеет доступа к Title браузера
 - `cr-up` подргужается так, что браузер приседает

### Milestones
  * 0.2.28 >> create-update: update layout.
    - [ ] change `app.main.tempalate`. leave only `<head>` and `<nav-bar>`.
    - [ ] change `read-all` template layout.
    - [ ] change to `.col-lg-n` to 1117 px.
  * 0.2.29 >> create-update: sort all by tags and categories
    - [ ] on left panel add template with dropdowns
    - [ ] write all business logic
    - [ ] backend: write cursor request to Mongo
  * 0.2.30 >> recipe-routing: unify all routes
    - [ ] do smth
  * 0.2.31 >> MongooseSchema unit tests
    - [ ] `read-one.component` & `read-one.template`
    - [ ] `read-many.component` & `read-many.template`
    - [ ] `crup.component` & `crup.template`
    - [ ] `backend/recipe/model.js`

  - 0.3.00: add module `user` as new entity
  - 0.4.00: add `comments`, `likes` & `recipe-book`

### MongoDB
  - [ ] ...

### backend
  - [ ] does I need TypeScript at backend?
  - [ ] backend/recipe-model.ts  -> TypeScript
  - [ ] backend/recipe-routes.ts -> TypeScript

### recipe
  * create-update
    - [ ] alternative time picking afted `update time@Mongo`
    - [ ] analyse Recipe.shema.yield and create dropdowns
    - [ ] сразу 5 ингредиентов или указать к-во
    - [ ] resize `create page` to 12 without panel
    - [ ] ? make `create page` pop-up
    - [ ] ? service for `getRecipesData`
  * read-many
    - [ ] lists to `LD+JSON` list as Google recipe
    - [ ] update ccard footer to codepen example
  * read-one
    - [ ] ...
  * delete
    - [ ] write all logic

## Styles
  - Semantic UI > Label
  - Material-UI > Chip

## Angular 4.*
  - form > ngPrimefaces