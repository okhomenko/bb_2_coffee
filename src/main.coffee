
requirejs [

  # Libs
  'jquery',

  # Deps
  'modules/stations/collections/stations',
  'modules/stations/views/list'

], ($, Stations, ListView) ->

  collection = new Stations

  view = new ListView
    collection: collection

  $('#container').append(view.render().el)

  collection.fetch()

