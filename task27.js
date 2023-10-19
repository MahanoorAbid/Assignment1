"use strict";
let agee = 25;
if (agee < 2) {
    console.log("The person is a baby.");
}
else if (agee >= 2 && agee < 4) {
    console.log("The person is a toddler.");
}
else if (agee >= 4 && agee < 13) {
    console.log("The person is a kid.");
}
else if (agee >= 13 && agee < 20) {
    console.log("The person is a teenager.");
}
else if (agee >= 20 && agee < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
