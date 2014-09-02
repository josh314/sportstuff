var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('MetaCtrl', function() {
  this.title = 'SportsStuff | Your One-Stop Shop for Stuff About Sports';
});

app.controller('HeaderCtrl', function() {
  this.title = 'SportsStuff';
  this.simpleNavs = [
    {title: 'Baseball', url: '#baseball' },
    {title: 'Basketball', url:'#basketball'},
    {title: 'Football', url:'#football'},
    {title: 'Hockey', url:'#hockey'},
  ];
  this.dropNavs = [
    {
      title:'Other',
      drops: [
        {title:'Golf', url:'#golf'},
        {title:'Tennis', url:'#tennis'},
        {title:'Soccer', url:'#soccer'},
      ],
    },
    {
      title:'International',
      drops: [
        {title:'Caber Toss', url:'#caber'},
        {title:'Cricket', url:'#cricket'},
        {title:'Curling', url:'#curling'},
      ],
    },
  ];
  this.isCollapsed = true;
  this.toggleCollapse  = function() { this.isCollapsed = !this.isCollapsed };
  this.collapse = function() {this.isCollapsed = true;};
  this.expand = function() {this.isCollapsed = false;};
});


var SubscribeModalCtrl = function($scope, $modal, $log) {
  $scope.open = function (size) {
    var subscribeModalInstance = $modal.open({
      templateUrl: 'subscribeModalContent.html',
      controller: SubscribeModalInstanceCtrl,
      size: size,
    });

    subscribeModalInstance.result.then(function (result) {
      $log.info('The fulfilled modal result: ' + result);
    }, function (reason) {
      $log.info('Modal dismissed at: ' + new Date());
      $log.info('Dismiss reason: ' + reason);
    });
  };
};


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var SubscribeModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.title = 'Subscribe to SportsStuff!';
  $scope.copy = 'You can get instant access to all of our exclusive content. Become a Premium Member of SportStuff for only $24.95 a month!';

  $scope.ok = function () {
    /* TODO: forward onto a payment form */
    $modalInstance.close('ok button');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel button');
  };

};

var FeatureCarouselCtrl = function($scope, $modal) {

  $scope.interval = 5000;
  $scope.items = [
    {
      img: 'http://lorempixel.com/480/320/sports/1',
      caption: 'Caption 1',
      headline: 'Headline 1',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.',
    },
    {
      img: 'http://lorempixel.com/480/320/sports/2',
      caption: 'Caption 2',
      headline: 'Headline 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cumque, quos nostrum ullam eveniet error vel adipisci incidunt tempore fugiat nihil, quas qui, neque labore alias ad. Magnam officiis qui excepturi, sunt odit porro dolores vel commodi. Suscipit error, expedita nobis et optio, modi vitae nam quas nisi aut cumque veritatis vero recusandae. Ducimus non error laborum id quod voluptatem aperiam sit hic debitis, iste distinctio facere tenetur expedita, optio et neque deleniti impedit, sed inventore facilis quasi exercitationem atque officia! Recusandae eaque similique laudantium quos quia dolore sit consequuntur, ullam reiciendis praesentium dicta fuga autem rerum. Culpa eum tenetur eligendi accusantium sunt, beatae iusto ullam ea quisquam architecto qui tempora molestiae, nihil quibusdam error veritatis alias nobis ex accusamus mollitia, et sapiente ad. Aspernatur, veritatis, pariatur! Deleniti labore autem aperiam ullam possimus commodi doloribus placeat, atque quis inventore vero culpa, magni provident quidem quae, rerum? Culpa eveniet, delectus impedit!',
    },
    {
      img: 'http://lorempixel.com/480/320/sports/3',
      caption: 'Caption 3',
      headline: 'Headline 3',
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.',
    },
    {
      img: 'http://lorempixel.com/480/320/sports/4',
      caption: 'Caption 4',
      headline: 'Headline 4',
      text: 'Integer non nisl ac eros ultrices dignissim. Morbi eu tellus id lacus consectetur auctor. Morbi congue eros ex, ut consequat nisl pharetra id. Praesent aliquet massa quis gravida consectetur. Duis tellus sapien, sollicitudin eget sapien ut, feugiat interdum nisi. Curabitur aliquam ipsum nec diam bibendum, quis rhoncus elit pretium. Quisque facilisis consequat sapien vitae faucibus. Sed sed pulvinar mauris. Suspendisse finibus vulputate nunc non egestas. Phasellus varius aliquet ex sed gravida. Praesent diam metus, varius vel leo sed, placerat congue urna. Praesent eu consectetur lorem, at lacinia turpis. Morbi non lectus risus. Cras rhoncus aliquet nulla, vitae venenatis neque imperdiet ut. Aliquam enim tellus, sollicitudin vel lectus id, tempor condimentum mi. Nulla facilisi. Etiam massa nibh, aliquam sit amet luctus vel, fermentum id mi. Praesent pharetra diam at dolor semper finibus. Nulla in rutrum est. Donec lobortis sit amet justo id ultricies. Cras sit amet mollis nisl, vitae ultrices nulla. Donec mi ipsum, interdum sed aliquet vitae, cursus ac neque. Donec vestibulum sagittis lectus, at auctor mauris lobortis vel. Sed fermentum rutrum purus nec consectetur. Integer quis congue velit. Suspendisse potenti. Nunc enim leo, pellentesque non lacinia sed, tincidunt at urna. Aliquam vestibulum porta porta. Sed porta lectus eu convallis dignissim. Proin ac odio dui. Fusce a erat tincidunt nulla congue finibus in ut quam.',
    },
  ];
  $scope.open = function (index) {
    var featureModalInstance = $modal.open({
      templateUrl: 'featureModalContent.html',
      controller: FeatureModalInstanceCtrl,
      size: 'lg',
      resolve: {
        items: function () {
          return $scope.items;
        },
        index: function() { 
          return index; 
        }
      }
    });
  }
};

var FeatureModalInstanceCtrl = function ($scope, $modalInstance, items, index) {
  $scope.item = items[index];
  $scope.prev = function() {
    index = (index-1);
    if (index<0) index = items.length -1;
    $scope.item = items[index];
  }
  $scope.next = function() {
    index = (index+1) % items.length;
    $scope.item = items[index];
  }
  $scope.close = function () {
    $modalInstance.close('ok button');
  };
};