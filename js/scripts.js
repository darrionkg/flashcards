$(document).ready(function()  {
  $("#term1.clickable1").click(function()  {
    $("#define1").removeClass();
    $("#term1").addClass("hide");
  });

  $("#define1.clickable2").click(function()  {
    $("#term1").removeClass();
    $("#define1").addClass("hide");
  });

  $("#term2.clickable1").click(function()  {
    $("#define2").removeClass();
    $("#term2").addClass("hide");
  });

  $("#define2.clickable2").click(function()  {
    $("#term2").removeClass();
    $("#define2").addClass("hide");
  });

  $("#term3.clickable1").click(function()  {
    $("#define3").removeClass();
    $("#term3").addClass("hide");
  });

  $("#define3.clickable2").click(function()  {
    $("#term3").removeClass();
    $("#define3").addClass("hide");
  });
  // $(".clickable2").click(function()  {
  //   $("#define1").addClass("hide");
  //   $("#term1").removeClass();
  // });
  //
  // $(".clickable1").click(function()  {
  //   $("#define2").removeClass();
  //   $("#term2").addClass("hide");
  // });
  //
  // $(".clickable2").click(function()  {
  //   $("#define2").addClass("hide");
  //   $("#term2").removeClass();
  // });


});
