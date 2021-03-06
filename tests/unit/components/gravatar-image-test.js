import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('gravatar-image', 'GravatarImageComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it is added to the page', function() {
  var component = this.subject();
  this.append();

  ok($('img').length);
});

test('it does not wrap the img with a span or div but with img', function() {
  var component = this.subject();
  this.append();
  var wrapperEl = component.$().prop('tagName');

  notEqual(wrapperEl, 'SPAN');
  notEqual(wrapperEl, 'DIV');
});
