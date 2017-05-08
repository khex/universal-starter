## Schema v.20

|  # |      JSON-LD      | MySchema        | Class     | Amnt |Done |Wall |Social| 
| -- |:------------------|:----------------|:----------|:----:|:---:|:---:|:----:|
|  1 | name              | name            |+<Text>    | one  |  +  |  +  |      |
|  2 | recipeCategory    | shema.category  |+<Text>    | one  |  +  |     |      |
|  3 | image             | image           |+<URL>     | one  |  +  |  +  |      |
|  4 | datePublished     | published       |+<Date>    | one  |  +  |  +  |      |
|  5 | description       | description     |+<Text>    | one  |  +  |  +  |      |
|  6 | aggregateRating   |                 |-<AgRating>| one  |     |     |  +   |
|  7 | review            |                 |-<Review>  | one  |     |     |  +   |
|  8 | prepTime          | shema.prepTime  |+<Duration>| one  |  +  |     |      |
|  9 | totalTime         | shema.totalTime |+<Duration>| one  |  +  |  +  |      |
| 10 | nutr.calories     |                 |-<Energy>  | one  |     |     |      |
| 11 | recipeInstructions| instructions    |+<Text>    | many |  +  |     |      |
| 12 | recipeYield       | shema.yield     |+<Text>    | one  |  +  |  +  |      |
| 13 | recipeIngredient  | ingredients     |+<Text>    | many |  +  |     |      |
| 14 | author            | author          |-<Person>  | one  |  +  |  +  |      |
| 15 |                   | publisher       |-<Organiz.>| one  |  +  |     |      |
| 16 |                   | likes           |           | one  |     |     |   +  |
| 17 |                   | viewedTimes     |           | one  |     |     |   +  |
| 18 |                   | sourseUrl       |           | one  |     |     |   +  |
| 19 |                   | shema.cuisine   |           | one  |  +  |  +  |      |
| 20 |                   | shema.cost      |           | one  |  +  |     |      |
| 21 |                   | shema.complexity|           | one  |  +  |  +  |      |
| 21 |                   | shema.diet      |           | one  |  +  |     |      |
| 22 |                   | shema.methods   |           | many |  +  |     |      |
| 23 |                   | shema.purposes  |           | many |  +  |     |      |
| 24 |                   | shema.appliances|           | many |  +  |     |      |

### Update Some Field
  * read-one
    - read-one.component.ts
    - read-one.template.html
  * read-many
    - read-many.component.ts
    - read-many.template.html
  * cr-up
    - cr-up.component.ts
    - cr-up.template.html
    - build.function.ts
    - dropdown-data.ts
  * recipe-schema.md
  * recipe-model.js