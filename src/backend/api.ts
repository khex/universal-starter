var util       = require('util');
//  import { inspect } from 'util';
var    { Router } = require('express');
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
  { id: 0, value: 'finish example', created_at: new Date(), completed: false },
  { id: 1, value: 'add tests', created_at: new Date(), completed: false },
  { id: 2, value: 'include development environment', created_at: new Date(), completed: false },
  { id: 3, value: 'include production environment', created_at: new Date(), completed: false }
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
