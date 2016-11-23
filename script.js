console.log("hi")
var commentInput = $("#comment-input")
var commentDisplay = $(".commment-display")
var newComment = commentInput.val()

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val())
  }
})



onNewListItem("commentInput", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})