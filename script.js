console.log("hi")
var commentInput = $("#comment-input")
var commentDisplay = $(".commment-display")
var newComm

commentInput.keydown(function(e) {
  if (e.which == 13) {
    console.log("hi also");
    addListItem("comments", commentInput.val());

  }
})



onNewListItem("commentInput", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})