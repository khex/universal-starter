|----|-----------------|-----------------|-------|------|-----|
|  # | Google          | MySchema        |Social | Amnt |Done |
|----|-----------------|-----------------|-------|------|-----|
|  1 | name            | name            |       | one  |  +  |
|  2 | description     | description     |       | one  |  +  |
|  3 | author          | author          |       | one  |  +  |
|  3 | publisher       | publisher       |       | one  |  +  |
|  4 | datePublished   | published       |       | one  |  +  |
|  5 | --------------- | likes           |   +   | one  |     |
|  6 | --------------- | viewedTimes     |   +   | one  |     |
|  7 | --------------- | sourseUrl       |   +   | one  |     |
|  8 | aggregateRating | --------------- |   +   | one  |     |
|  9 | review          | --------------- |   +   | one  |     |
| 10 | recipeCategory  | shema.category  |       | one  |  +  |
| 11 | prepTime        | shema.prepTime  |       | one  |     |
| 12 | totalTime       | shema.totalTime |       | one  |  +  |
| 13 | nutr.calories   | --------------- |       | one  |     |
| 14 | recipeYield     | shema.yield     |       | one  |  +  |
| 15 |                 | shema.cuisine   |       | one  |  +  |
| 16 |                 | shema.cost      |       | one  |  +  |
| 17 |                 | shema.complexity|       | one  |  +  |
| 18 |                 | shema.diet      |       | one  |  +  |
| 19 |                 | shema.methods   |       | many |  +  |
| 20 |                 | shema.purposes  |       | many |  +  |
| 21 |                 | shema.appliances|       | many |  +  |
|----|-----------------|-----------------|-------|------|-----|
Для результатов поиска показывать количство лайков,
а для одного рецепта aggregateRating только в JSON-LD.
В `<script type="application/ld+json">` использовать только
допустимые поля, без експериментов.
