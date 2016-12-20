document.addEventListener('DOMContentLoaded', function() {
    // Vue.js parts
    var tracker = new Vue({
      el: '#tracker',
      data: {
        message: 'Hello Vue!'
      }
    })

    var fab = document.getElementById('new');
    var newItem = document.getElementById('new-item');

    if (!newItem.showModal) {
        dialogPolyfill.registerDialog(newItem);
    }

    // Clicks on the main FAB
    fab.addEventListener('click', function() {
        newItem.showModal();
    }, false);

    // Clicks on the modal from the FAB
    newItem.querySelector('.close').addEventListener('click', function() {
        newItem.close();
    });
});
