// local reviews data
var reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
    },
];
//buttons
var left = document.getElementById("left");
var right = document.getElementById("right");
var random = document.getElementById("random");
//select items
var img = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
//current index
var currentIndex = 0;
var itemChange = function (index) {
    var item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
// load initial item
window.addEventListener("DOMContentLoaded", function () { return itemChange(currentIndex); });
left.addEventListener("click", function () {
    if (currentIndex < 0)
        currentIndex = reviews.length - 1;
    itemChange(currentIndex);
    currentIndex--;
});
right.addEventListener("click", function () {
    if (currentIndex > reviews.length - 1)
        currentIndex = 0;
    itemChange(currentIndex);
    currentIndex++;
});
random.addEventListener("click", function () {
    currentIndex = Math.floor(Math.random() * reviews.length);
    itemChange(currentIndex);
    currentIndex++;
});