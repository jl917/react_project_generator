module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="referrer" content="origin" />
<!-- only IE -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- //only IE -->
<!-- mobile -->
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="apple-mobile-web-app-title" content="TITLE" />
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="email=no" />
<!-- //mobile -->
<!-- seo -->
<meta name="description" content="description"/>
<meta property="og:title" content="TITLE">
<meta property="og:url" content="https://www.naver.com/">
<meta property="og:image" content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png">
<meta property="og:description" content="description"/>
<!-- //seo -->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<div id="app"></div>
</body>
</html>`;
