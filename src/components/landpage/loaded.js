import $ from "jquery";
export const load = $(document).ready(function () {
  // Fakes the loading setting a timeout
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 2000);
});
