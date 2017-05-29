// const de bug = require('debug')

$('.remove').on('click', function(e) {
    e.preventDefault();
    const $thisElement = $(this)
    const url = $thisElement.attr("href")
    const method = 'DELETE'
    $.ajax({ url, method })
        .done(response => {
            $thisElement.parents('.list-group-item').remove()
            // debug('Removed task')
        })
        .fail(() => {
            alert("Try removing again")
            // debug('Failed on removing task')
        })

})

$('.list-users .edit').on('click', function(e) {
  e.preventDefault()
  const $thisElement = $(this)
  $thisElement
    .parents('.list-group-item')
    .find("form input")
    .removeClass("hidden")
    .end()
    .find("p")
    .addClass("hidden")
})

$(".edit-form").on("submit", function(e) {
  e.preventDefault()
  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  console.log(url)
  const title = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: {title}
  })
  .done( response => {
    $thisElement
      .siblings("p")
        .text(title)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
  })
  .fail( () =>  alert("Try removing again champ!") );

})

$('.complete').on('click', function(e) {
    e.preventDefault();
    const $thisElement = $(this)
    const url = $thisElement.attr("href")
    const method = 'PUT'
    $.ajax({ url, method })
        .done(response => {
            $thisElement.parents('.list-group-item').remove()
            // debug('Removed task')
        })
        .fail(() => {
            alert("Try removing again")
            // debug('Failed on removing task')
        })

})