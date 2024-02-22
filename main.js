let box = document.querySelector(".eye-left");
let eyeRight = document.querySelector(".eye-right");

let boxBoundingRect = box.getBoundingClientRect();
let boxCenter = {
    x: boxBoundingRect.left + boxBoundingRect.width / 2,
    y: boxBoundingRect.top + boxBoundingRect.height / 2,
};

document.addEventListener("mousemove", (e) => {
    let angle =
        Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
            (180 / Math.PI);
    box.style.transform = `rotate(${angle}deg)`;
    eyeRight.style.transform = `rotate(${angle}deg)`;
});
