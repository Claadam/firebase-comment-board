console.log("hi")
var commentInput = $("#form-control")
var commentDisplay = $(".commment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
  }
})

onNewListItem("commentInput", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})