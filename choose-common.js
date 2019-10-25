$('body').on('click', '.morn-btn', function(e) {
    $(this).removeClass('morn-btn').addClass('un-morn-btn');
    $('.morn').addClass("dropped").html('X');
});
$('body').on('click', '.un-morn-btn', function(e) {
    $(this).removeClass('un-morn-btn').addClass('morn-btn');
    $('.morn').removeClass('dropped').html('');
});

$('body').on('click', '.noon-btn', function(e) {
    $(this).removeClass('noon-btn').addClass('un-noon-btn');
    $('.noon').addClass("dropped").html('X');
});
$('body').on('click', '.un-noon-btn', function(e) {
    $(this).removeClass('un-noon-btn').addClass('noon-btn');
    $('.noon').removeClass('dropped').html('');
});

$('body').on('click', '.th-btn', function(e) {
    e.preventDefault();
    time = e.currentTarget.dataset.time;
    $(this).removeClass('th-btn').addClass('un-th-btn');
    $('.th-' + time).addClass("dropped").html('X');
});
$('body').on('click', '.un-th-btn', function(e) {
    e.preventDefault();
    time = e.currentTarget.dataset.time;
    $(this).removeClass('un-th-btn').addClass('th-btn');
    $('.th-' + time).removeClass('dropped').html('');
});

$('body').on('click', '.time-btn', function(e) {
    e.preventDefault();
    time = e.currentTarget.dataset.time;
    $(this).removeClass('time-btn').addClass('un-time-btn');
    $('.t-' + time).addClass("dropped").html('X');
});
$('body').on('click', '.un-time-btn', function(e) {
    e.preventDefault();
    time = e.currentTarget.dataset.time;
    $(this).removeClass('un-time-btn').addClass('time-btn');
    $('.t-' + time).removeClass('dropped').html('');
});
