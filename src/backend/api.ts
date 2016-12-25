var util       = require('util');
var { Router } = require('express');
import { fakeDataBase }   from './db';
import { fakeRedisCache } from './cache';


/**************************
*   Fake DB & Cache API   *
**************************/
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077';

export const ServerApi = (req, res) => {
  let key = USER_ID + '/data.json';
  let cache = fakeRedisCache.get(key);
  if (cache !== undefined) {
    console.log('/data.json Cache Hit');
    return res.json(cache);
  }
  console.log('/data.json Cache Miss');

  fakeDataBase.get()
    .then(data => {
      fakeRedisCache.set(key, data);
      return data;
    })
    .then(data => res.json(data));
}


/***************
*   Todo API   *
***************/
var COUNT = 4;
var TODOS = [
  { id: 0, value: 'finish example',
    created_at: new Date(), completed: false },
  { id: 1, value: 'add tests',
    created_at: new Date(), completed: false },
  { id: 2, value: 'include development environment',
    created_at: new Date(), completed: false },
  { id: 3, value: 'include production environment',
    created_at: new Date(), completed: false }
];

export const TodoApi = () => {

  var router = Router()
//router.route('/todos')  
  router.route('/')
    .get((req, res) => {
      console.log('GET');
      // 70ms latency
      setTimeout(() => {
        res.json(TODOS);
      }, 0);

    })
    .post((req, res) => {
      console.log('POST', util.inspect(req.body, {colors: true}));
      var todo = req.body;
      if (todo) {
        TODOS.push({
          value: todo.value,
          created_at: new Date(),
          completed: todo.completed,
          id: COUNT++
        });
        return res.json(todo);
      }

      return res.end();
    });

  router.param('todo_id', (req, res, next, todo_id) => {
    // ensure correct prop type
    var id = Number(req.params.todo_id);
    try {
      var todo = TODOS[id];
      req.todo_id = id;
      req.todo = TODOS[id];
      next();
    } catch (e) {
      next(new Error('failed to load todo'));
    }
  });
//router.route('/todos/:todo_id')
  router.route('/:todo_id')
    .get((req, res) => {
      console.log('GET', util.inspect(req.todo, {colors: true}));

      res.json(req.todo);
    })
    .put((req, res) => {
      console.log('PUT', util.inspect(req.body, {colors: true}));

      var index = TODOS.indexOf(req.todo);
      var todo = TODOS[index] = req.body;

      res.json(todo);
    })
    .delete((req, res) => {
      console.log('DELETE', req.todo_id);

      var index = TODOS.indexOf(req.todo);
      TODOS.splice(index, 1);

      res.json(req.todo);
    });

  return router;
};


/*****************
*   Recipe API   *
*****************/
var RecipesDB = [
  {
    rid: 1,
    name: 'Пицца по-милански',
    description: `Рецепт пиццы по-милански из книги 'Всевозможные` +
      `рецепты пиццы и макаронных изделий', авторства одного из ` +
      `лучших шеф-поваров Северной Америки, Рона Каленьюика.`,
    url: 'http://localhost:3000/recipe/1/pizza-po-milanski',
    created_at: "2016-12-25T12:35:00.000Z",
    imageUrl: 'assets/images/rid-1.jpg'
  }, {
    rid: 2,
    name: 'Основное тесто для пиццы',
    description: `Рецепт пиццы по-милански из книги 'Всевозможные` +
      `рецепты пиццы и макаронных изделий', авторства одного из ` +
      `лучших шеф-поваров Северной Америки, Рона Каленьюика.`,
    url: 'http://localhost:3000/recipe/2/osnovnoe-testo-dlja-pizzy',
    created_at: "2016-12-25T12:36:00.000Z",
    imageUrl: 'assets/images/rid-1.jpg'
  }, {
    rid: 3,
    name: 'Пицца с курицей барбекю',
    description: `Рецепт пиццы по-милански из книги 'Всевозможные` +
      `рецепты пиццы и макаронных изделий', авторства одного из ` +
      `лучших шеф-поваров Северной Америки, Рона Каленьюика.`,
    url: 'http://localhost:3000/recipe/3/pizza-s-kuricoy',
    created_at: "2016-12-25T12:37:00.000Z",
    imageUrl: 'assets/images/rid-1.jpg'
  }, {
    rid: 4,
    name: 'Пицца по-гречески',
    description: `Рецепт пиццы по-милански из книги 'Всевозможные` +
      `рецепты пиццы и макаронных изделий', авторства одного из ` +
      `лучших шеф-поваров Северной Америки, Рона Каленьюика.`,
    url: 'http://localhost:3000/recipe/4/pizza-po-grecheski',
    created_at: "2016-12-25T12:38:00.000Z",
    imageUrl: 'assets/images/rid-1.jpg'
  }
];

export const RecipeApi = () => {

  //  as recipeRouter;
  var RR = Router();

  RR.route('/')
    .get((req, res) => {
      console.log('GET');
      res.json(RecipesDB);
    })
  
  RR.param('recipe_id', (req, res, next, recipe_id) => {
    // ensure correct prop type
    var rid = Number(req.params.recipe_id) - 1;
    try {
      req.rid    = rid;
      req.recipe = RecipesDB[rid];
      next();
    } catch (e) {
      next(new Error('failed to load todo'));
    }
  });

  RR.route('/:recipe_id')
    .get((req, res) => {
      console.log('GET', util.inspect(req.recipe, {colors: true}));
      res.json(req.recipe);
    });

  return RR;
}
