const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  pocketNum: 15,
  color: "gray",
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newSrapLength: function (lengthLeft, LenegthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = LenegthRight;
  },
};

console.log("The backpack object:", backpack);

console.log("SrapLength Before: ", backpack.strapLength.left, backpack.strapLength.right);

backpack.newSrapLength(10, 12);

console.log("SrapLength after: ", backpack.strapLength.left, backpack.strapLength.right);