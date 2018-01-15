// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOM fully loaded and parsed");
// });

var a = function (b) {
    return b;
};

var double = [1, 2, 3].map(function (num) {
    return num * 2;
});
console.log(double); // [2,4,6]

var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],
    // printFriends() {
    //     var _this = this;
    //
    //     this._friends.forEach(function (f) {
    //         return console.log(_this._name + " knows " + f);
    //     });
    // }
};
console.log(bob.printFriends());