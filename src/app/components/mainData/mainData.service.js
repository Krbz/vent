(function() {
  'use strict';

  angular
      .module('vent')
      .service('mainData', mainData);

  /** @ngInject */
  function mainData() {
    var data = [
      {
        'id': 1,
        'title': 'AngularJS',
        'description': 'Każdy naród – podobnie jak gatunek – ma swoje centrum, swój rdzeń. Oprócz tego ma on swoje obrzeża, gdzie jego właściwy charakter jest słabszy, gdzie mieszka się z innymi narodami, gdzie podlega zmianom… Te właśnie obrzeża są często kulturowo najbardziej płodne, ale gdyby zginęło owo jądro zginąłby i naród; i jedno i drugie jest niezbędnie potrzebne: jądro, do stabilizacji, kresy do wprowadzenia zmian i eksperymentowania nie szkodzącego centrum, które może modyfikacje przyjąć lub zignorować. ',
        'short': 'Każdy naród – podobnie jak gatunek – ma swoje centrum, swój',
        'date': 'Wrzesień 2014',
        'logo': 'angular.png',
        'score': {
          'likes': 123,
          'comments': 2
        },
        'tags': ['tag1', 'tag2', 'tag3'],
        'imgs': [
        'angular.png', 'gulp.png'  
        // 'project_1_01.png'
        ]
      },
      {
        'id': 2,
        'title': 'BrowserSync',
        'description': 'Socjalizm wszędzie niszczy jedną rzecz: różnorodność. Wszystko ma być najlepsze, a rzeczy najlepszych jest, jak wiadomo, mało… Przypominam raz jeszcze, że dla Czerwonych „najlepsze” to jest to, co ONI uważają za „najlepsze” dla nas, a nie to, co my lubimy!!',
        'date': 'Wrzesień 2014',
        'logo': 'browsersync.png'
      },
      {
          'id': 1,
      'title': 'GulpJS',
        'description': 'The streaming build system.',
        'date': 'Wrzesień 2014',
        'logo': 'gulp.png'
      },
      {
        'id': 1,
        'title': 'Jasmine',
        'description': 'Behavior-Driven JavaScript.',
        'date': 'Październik 2014',
        'logo': 'jasmine.png'
      },
      {
        'id': 1,
        'title': 'Karma',
        'description': 'Spectacular Test Runner for JavaScript.',
        'date': 'Wrzesień 2014',
        'logo': 'karma.png'
      },
      {
        'id': 1,
        'title': 'Protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'date': 'Czerwiec 2014',
        'logo': 'protractor.png'
      },
      {
        'id': 1,
        'title': 'Sass (Node)',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'date': 'Wrzesień 2014',
        'logo': 'node-sass.png'
      },
      {
        'id': 1,
        'title': 'Jade',
        'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
        'date': 'Wrzesień 2014',
        'logo': 'jade.png'
      }
    ];
    
    return data;
  }

})();
