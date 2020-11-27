$(window).on('load resize', function sizeChanged() {
    if ($(this).width() >= 574) {
        $("a[data-toggle='collapse']").attr("data-toggle", "modal");
        $("a[data-target='#hops']").attr("data-target", "#hopsM");
    } else {
        $("a[data-toggle='modal']").attr("data-toggle", "collapse");
        $("a[data-target='#hopsM']").attr("data-target", "#hops");
    }
});


