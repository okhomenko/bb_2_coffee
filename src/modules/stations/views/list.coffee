
define [

  # Libs
  'backbone'

  # Deps
  './item'

], (Backbone, ItemView) ->

  class View extends Backbone.View

    views: []

    initialize: () ->
      _.bindAll @
      @collection.on 'reset', @renderAll

    renderAll: () ->
      this.collection.each (model) =>
        view = new ItemView model: model
        @views.push view

        content = view.render().el
        (@$ '.list').append content

    render: () ->
      this.$el.html('<h1>Stations</h1><ul class=list></ul>')
      @

      $('#').html(2).text()


  return View



