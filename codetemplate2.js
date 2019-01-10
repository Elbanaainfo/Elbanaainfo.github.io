function favouritePosts(json) {
    var htmlcode = '<ul class="swiper-wrapper favourite-posts">';
    document.write(htmlcode);
    for (var i = 0; i < json.feed.entry.length; i++) {
        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
            if (json.feed.entry[i].link[j].rel == 'alternate') {
                var postUrl = json.feed.entry[i].link[j].href;
                break
            }
        }
        var postComments = json.feed.entry[i].thr$total.$t;
        var postTitle = json.feed.entry[i].title.$t;
        var postThumbSize = 600;
        var postThumb = " ";
        postThumb = postThumb.replace('/s72-c/', '/s' + postThumbSize + '/');
        var postCategory = " ";
        try {
            postThumb = json.feed.entry[i].media$thumbnail.url
        } catch (nl) {
            postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"
        }
        try {
            postCategory = json.feed.entry[i].category[0].term
        } catch (n) {
            postCategory = "uncategorized"
        }
        var item = '<div class="swiper-slide favourite-post"><div class="item-outer"><div class="favourite-thumbnail"><a href="' + postUrl + '" style="background:url(' + postThumb + ') no-repeat center center;background-size: cover"/></div><a class="favourite-categorys mag-cat" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><div class="favourite-posts-overlay"><h1 class="favourite-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h1></div></div></div>';
        htmlcode += '</ul>';
        document.write(item);
        $('.favourite-thumbnail a')
            .attr('style', function (i, src) {
                return src.replace('/s72-c', '/s1600')
            });
        $('.favourite-thumbnail a')
            .attr('style', function (i, src) {
                return src.replace('/default.jpg', '/hqdefault.jpg')
            })
    }
}

function relatedPosts(json) {
    var htmlcode = '<ul class="swiper-wrapper">';
    document.write(htmlcode);
    for (var i = 0; i < json.feed.entry.length; i++) {
        for (var j = 0; j < json.feed.entry[i].link.length; j++) {
            if (json.feed.entry[i].link[j].rel == 'alternate') {
                var postUrl = json.feed.entry[i].link[j].href;
                break
            }
        }
        var postTitle = json.feed.entry[i].title.$t;
        var postThumbSize = 600;
        var postThumb = " ";
        var postCategory = " ";
        postThumb = postThumb.replace('/s72-c/', '/s' + postThumbSize + '/');
        try {
            postThumb = json.feed.entry[i].media$thumbnail.url
        } catch (nl) {
            postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"
        }
        try {
            postCategory = json.feed.entry[i].category[0].term
        } catch (n) {
            postCategory = "uncategorized"
        }
        var item = '<div class="swiper-slide"><div class="related-post"><div class="related-thumbnail"><a href="' + postUrl + '"><img src="' + postThumb.replace('/s72-c/', '/s' + 800 + '/') + '"/></a></div><div class="related-posts-overlay"><a class="mag-cat" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><h4 class="related-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h4></div></div></div>';
        htmlcode += '</ul>';
        document.write(item)
    }
}
