jQuery(function($) {
    $(document)
        .drag("start", function() {
            return $('<div class="selection" />')
                .css('opacity', .65)
                .appendTo(document.body);
        })
        .drag(function(ev, dd) {
            $(dd.proxy).css({
                top: Math.min(ev.pageY, dd.startY),
                left: Math.min(ev.pageX, dd.startX),
                height: Math.abs(ev.pageY - dd.startY),
                width: Math.abs(ev.pageX - dd.startX)
            });
        })
        .drag("end", function(ev, dd) {
            $(dd.proxy).remove();
        });

    $('.drop')
        .drop("start", function() {
            $(this).addClass("active");
        })
        .drop(function() {
            if ($(this).text().indexOf('X') == -1) {
                $(this).addClass("dropped").html('X');
            } else {
                $(this).removeClass('dropped').html('');
            }
        })
        .drop("end", function() {
            $(this).removeClass("active");
        })
        .click(function() {
            if ($(this).text().indexOf('X') == -1) {
                $(this).addClass("dropped").html('X');
            } else {
                $(this).removeClass('dropped').html('');
            }
        });

    $.drop({
        multi: true
    });
});
