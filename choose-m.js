$('body').on('click', '.mobile-all-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('mobile-all-btn').addClass('un-mobile-all-btn');
    $('.day-' + day).addClass("dropped").html('X');
});
$('body').on('click', '.un-mobile-all-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('un-mobile-all-btn').addClass('mobile-all-btn');
    $('.day-' + day).removeClass('dropped').html('');
});

$('body').on('click', '.mobile-hide-morn-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('mobile-hide-morn-btn').addClass('mobile-show-morn-btn').text('上午（隱藏中）');
    $('.morn-tr-' + day).hide();
});
$('body').on('click', '.mobile-show-morn-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('mobile-show-morn-btn').addClass('mobile-hide-morn-btn').text('上午');
    $('.morn-tr-' + day).show();
});

$('body').on('click', '.mobile-hide-noon-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('mobile-hide-noon-btn').addClass('mobile-show-noon-btn').text('下午（隱藏中）');
    $('.noon-tr-' + day).hide();
});
$('body').on('click', '.mobile-show-noon-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('mobile-show-noon-btn').addClass('mobile-hide-noon-btn').text('下午');
    $('.noon-tr-' + day).show();
});

$('.tab-btn').on('click', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $('.tab-btn').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.date-table').hide();
    $('.date-table-' + day).show();
});
