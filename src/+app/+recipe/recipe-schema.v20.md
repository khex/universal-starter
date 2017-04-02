|----|-------------------|-----------------|------|-----|-----|------|
|  # | Google JSON-LD    | MySchema        | Amnt |Done |Wall |Social| 
|----|-------------------|-----------------|------|-----|-----|------|
|  1 | name              | name            | one  |  +  |  +  |      |
|  2 | recipeCategory    | shema.category  | one  |  +  |     |      |
|  3 | image             | image           | one  |  +  |  +  |      |
|  4 | datePublished     | published       | one  |  +  |  +  |      |
|  5 | description       | description     | one  |  +  |  +  |      |
|  6 | aggregateRating   |                 | one  |     |     |  +   |
|  7 | review            |                 | one  |     |     |  +   |
|  8 | prepTime          | shema.prepTime  | one  |  +  |     |      |
|  9 | totalTime         | shema.totalTime | one  |  +  |  +  |      |
| 10 | nutr.calories     |                 | one  |     |     |      |
| 11 | recipeInstructions| instructions    | many |  +  |     |      |
| 12 | recipeYield       | shema.yield     | one  |  +  |  +  |      |
| 13 | recipeIngredient  | ingredients     | many |  +  |     |      |
| 14 | author            | author          | one  |  +  |  +  |      |
| 15 |                   | publisher       | one  |  +  |     |      |
| 16 |                   | likes           | one  |     |     |   +  |
| 17 |                   | viewedTimes     | one  |     |     |   +  |
| 18 |                   | sourseUrl       | one  |     |     |   +  |
| 19 |                   | shema.cuisine   | one  |  +  |  +  |      |
| 20 |                   | shema.cost      | one  |  +  |     |      |
| 21 |                   | shema.complexity| one  |  +  |  +  |      |
| 21 |                   | shema.diet      | one  |  +  |     |      |
| 22 |                   | shema.methods   | many |  +  |     |      |
| 23 |                   | shema.purposes  | many |  +  |     |      |
| 24 |                   | shema.appliances| many |  +  |     |      |
|----|-------------------|-----------------|------|-----|-----|------|
search results -> aggregateRating@JSON-LD.
@recipe `<script type="application/ld+json">`
only Google JSON-LD fields.
