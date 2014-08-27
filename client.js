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
