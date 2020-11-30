let collArr = ["#hopsA", "#maltA", "#yeastA", "#palateA", "#abvA", "#ibuA"];
let modArr = ["#hopsMod", "#maltMod", "#yeastMod", "#palateMod", "#abvMod", "#ibuMod"];
let tarArr = ["#hops", "#malt", "#yeast", "#palate", "#abv", "#ibu"];

$(window).on('load resize', function sizeChanged() {
    let i = 0;
    for (i = 0; i < collArr.length; i++) {
        if ($(this).width() >= 574) {
            $("a[data-toggle='collapse']").attr("data-toggle", "modal");
            $(collArr[i]).attr("data-target", modArr[i]);
        } else {
            $("a[data-toggle='modal']").attr("data-toggle", "collapse");
            $(collArr[i]).attr("data-target", tarArr[i]);
        }
    }
});


