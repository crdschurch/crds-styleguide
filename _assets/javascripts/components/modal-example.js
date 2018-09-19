function openModal(id){
  $(id).modal('show');
}

function closeModal(id){
  $(id).modal('hide');
}

// Remove the modal on close (stops audio)
$(document).ready(function(){
  $('#videoModal').on('hide.bs.modal', function () {
    var $this = $(this).find('iframe')
    var tempSrc = $this.attr('src')
    $this.attr('src', '')
    $this.attr('src', tempSrc)
    return
  })
});