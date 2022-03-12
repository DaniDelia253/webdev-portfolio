// var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
// var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
//   return new bootstrap.Offcanvas(offcanvasEl)
// })

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})