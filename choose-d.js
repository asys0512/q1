$('body').on('click', '.hide-morn-btn', function(e) {
    $(this).removeClass('hide-morn-btn').addClass('show-morn-btn').text('上午（隱藏中）');
    $('.morn-tr').hide();
});
$('body').on('click', '.show-morn-btn', function(e) {
    $(this).removeClass('show-morn-btn').addClass('hide-morn-btn').text('上午');
    $('.morn-tr').show();
});

$('body').on('click', '.hide-noon-btn', function(e) {
    $(this).removeClass('hide-noon-btn').addClass('show-noon-btn').text('下午（隱藏中）');
    $('.noon-tr').hide();
});
$('body').on('click', '.show-noon-btn', function(e) {
    $(this).removeClass('show-noon-btn').addClass('hide-noon-btn').text('下午');
    $('.noon-tr').show();
});

$('body').on('click', '.day-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('day-btn').addClass('un-day-btn');
    $('.day-' + day).addClass("dropped").html('X');
});
$('body').on('click', '.un-day-btn', function(e) {
    e.preventDefault();
    day = e.currentTarget.dataset.day;
    $(this).removeClass('un-day-btn').addClass('day-btn');
    $('.day-' + day).removeClass('dropped').html('');
});

$('body').on('click', '.all-btn', function(e) {
    $(this).removeClass('all-btn').addClass('un-all-btn');
    $('.all').addClass("dropped").html('X');
});
$('body').on('click', '.un-all-btn', function(e) {
    $(this).removeClass('un-all-btn').addClass('all-btn');
    $('.all').removeClass('dropped').html('');
});
