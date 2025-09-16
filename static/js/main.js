// main.js - Simple JavaScript for your Blog Project

// 1. Confirm before deleting a post
document.addEventListener("DOMContentLoaded", function () {
    let deleteForms = document.querySelectorAll("form.delete-form");
    deleteForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            if (!confirm("Are you sure you want to delete this post?")) {
                e.preventDefault();
            }
        });
    });
});

// 2. Simple form validation (e.g., prevent empty content in comments)
document.addEventListener("DOMContentLoaded", function () {
    let commentForms = document.querySelectorAll("form.comment-form");
    commentForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            let textarea = form.querySelector("textarea");
            if (textarea && textarea.value.trim() === "") {
                e.preventDefault();
                alert("Comment cannot be empty!");
            }
        });
    });
});

// 3. Fade out messages (Django messages framework)
document.addEventListener("DOMContentLoaded", function () {
    let messages = document.querySelectorAll(".message");
    if (messages.length > 0) {
        setTimeout(() => {
            messages.forEach(msg => {
                msg.style.transition = "opacity 1s";
                msg.style.opacity = "0";
                setTimeout(() => msg.remove(), 1000);
            });
        }, 3000); // fade out after 3 seconds
    }
});
