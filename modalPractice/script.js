const handleVoteClick = (whatWasClicked) => {
  console.log(whatWasClicked);
};

const voteBoxes = document.getElementsByClassName("voteBox");
const elementsArray = Array.from(voteBoxes);
console.log(voteBoxes);

elementsArray.forEach((element) => {
  element.addEventListener("click", handleVoteClick);
});
