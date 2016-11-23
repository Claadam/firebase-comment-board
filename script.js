var commentInput = $("#comment-input")
var commentDisplay = $(".commment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val())
  }
})



onNewListItem("comments", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
  console.log(commentDisplay)

})