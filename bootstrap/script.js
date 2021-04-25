<script>
(function () {
  window.addEventListener("load", function () {
    var navLinks = document.querySelectorAll("header a, footer a,a");
    var getActiveLink = navLinks.forEach((item) => {
      if (item.href === window.location.href) {
        item.classList.add("arch-style");
        console.log(item);
      }
    });
  })
})();

</script>