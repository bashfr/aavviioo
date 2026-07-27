document.addEventListener('DOMContentLoaded', function() {
    const detailsElements = document.querySelectorAll('details');
  
    detailsElements.forEach(function(detail) {
      detail.addEventListener('toggle', function() {
        if (this.open) {
          detailsElements.forEach(function(otherDetail) {
            if (otherDetail !== detail) {
              otherDetail.open = false;
            }
          });
        }
      });
    });
  });