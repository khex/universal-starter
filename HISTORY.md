# Change Log
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
Only three actions alowed: **Create**, **Update** & **Delete**.

## [0.2.27] - 12-05-2017
**recipe/crup** Create: edit recipe document by `rid`.
**recipe/read-one** Create: edit button.
**recipe/read-many** Create: edit button.

## [0.2.27] - ??-05-2017
#### recipe
  * crup
    - Create: edit recipe document by `rid`.
  * read-one
    - Create: edit button.
  * read-many
    - Create: edit button.

#### template
  * app.component.html
    - Update: class `"container"` to `"container-fluid"`
    - Update: `.com-sm-n` to `.com-md-n col-lg-n`

## [0.2.26] - 25-04-2017

#### recipe/read-one
- Create: `Meta` and `OpenGraph` tags by `MetaService`.


## [0.2.25] - 09-04-2017

#### recipe/read-one
-  Create: "application/ld+json"


## [0.2.24] - 06-04-2017

#### Added
 - `read-one` server rendering


## [0.2.23] - 06-04-2017
### Changed
 - update single recipe view


## [0.2.22] - 06-04-2017
### Added
 - add `font awesome`

### Changed
 - retemplate `read-many` card

## [0.2.21] - 01-04-2017
### Changed
  - `mongo-db:` update all documents
  - `mongo-db`: update all documents

## [0.2.20] - 05-03-2017
### Changed
  * recipe\read-many:
    - `+recipe\read-all` > `+recipe\read-many`
    - `GET` params in URL request (not header)
    - add simple pager buttons `Previous` and `Next`
    - `shema.complxty` > `shema.complexity`
    - `shema.costs`    > `shema.cost`
    - add `shema.appliances`
    - add `publisher` as Organization
  * backend
    - `recipe-roter` > `recipe\recipe-router` 

## [0.2.20] - 05-03-2017
### +recipe
  * `read-many`
    - rename `read-all` to `read-many`.
    - `GET` send params in URL request, not in header.
    - add simple pager buttons `Previous` and `Next`.
  * **read-one**

    - `shema.complxty` to `shema.complexity`.
    - `shema.costs` to `shema.cost`.
    - add `shema.appliances`.
    - add `publisher` as string.

### taxonomy
  * Create `README.md` file.
  * Describe basic API functionality.

[0.2.27]: https://github.com/khex/legu/compare/v0.2.0...v0.3.0
[0.2.26]: https://github.com/khex/legu/compare/v0.2.0...v0.3.0
[0.2.25]: https://github.com/khex/legu/compare/v0.2.0...v0.3.0
[0.2.24]: https://github.com/khex/legu/compare/v0.1.0...v0.2.0
[0.2.23]: https://github.com/khex/legu/compare/v0.0.8...v0.1.0
[0.2.22]: https://github.com/khex/legu/compare/v0.0.7...v0.0.8
[0.2.21]: https://github.com/khex/legu/compare/v0.0.6...v0.0.7
[0.2.20]: https://github.com/khex/legu/compare/v0.0.5...v0.0.6
