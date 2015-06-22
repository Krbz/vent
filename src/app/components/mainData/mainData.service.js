(function() {
  'use strict';

  angular
      .module('vent')
      .service('mainData', mainData);

  /** @ngInject */
  function mainData() {
    var data = [
      {
        'title': 'AngularJS',
        'description': 'Każdy naród – podobnie jak gatunek – ma swoje centrum, swój rdzeń. Oprócz tego ma on swoje obrzeża, gdzie jego właściwy charakter jest słabszy, gdzie mieszka się z innymi narodami, gdzie podlega zmianom… Te właśnie obrzeża są często kulturowo najbardziej płodne, ale gdyby zginęło owo jądro zginąłby i naród; i jedno i drugie jest niezbędnie potrzebne: jądro, do stabilizacji, kresy do wprowadzenia zmian i eksperymentowania nie szkodzącego centrum, które może modyfikacje przyjąć lub zignorować.',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'description': 'Socjalizm wszędzie niszczy jedną rzecz: różnorodność. Wszystko ma być najlepsze, a rzeczy najlepszych jest, jak wiadomo, mało… Przypominam raz jeszcze, że dla Czerwonych „najlepsze” to jest to, co ONI uważają za „najlepsze” dla nas, a nie to, co my lubimy!!',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Sass (Node)',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      },
      {
        'title': 'Jade',
        'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
        'logo': 'jade.png'
      }
    ];

    return data;
  }

})();
