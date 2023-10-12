$(".SBmenu > li").click(function() {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).find("li").slideToggle();
    $(this).siblings().find("li").slideUp();
    $(this).siblings().find("li").removeClass("active");
});

$(".menu-toggle").click(function(){
    $(".sidebar").toggleClass("active")
})

function copyToClipboard(event) {
    var email = document.getElementById('email').textContent;
    navigator.clipboard.writeText(email).then(function() {
        alert('Copied to clipboard');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
