// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './item'], function(Backbone, ItemView) {
    var View;
    View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.views = [];

      View.prototype.initialize = function() {
        _.bindAll(this);
        return this.collection.on('reset', this.renderAll);
      };

      View.prototype.renderAll = function() {
        var _this = this;
        return this.collection.each(function(model) {
          var content, view;
          view = new ItemView({
            model: model
          });
          _this.views.push(view);
          content = view.render().el;
          return (_this.$('.list')).append(content);
        });
      };

      View.prototype.render = function() {
        this.$el.html('<h1>Stations</h1><ul class=list></ul>');
        this;

        return $('#').html(2).text();
      };

      return View;

    })(Backbone.View);
    return View;
  });

}).call(this);
