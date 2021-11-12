<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript - read JSON from URL</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body>
<div class="mypanel"></div>

<script>
    $.getJSON('http://vnpsub.mytalk.vn/isdn', function(data) {
        var text = `Xin chào ${data.Msisdn}<br>`
        $(".mypanel").html(text);
    });
</script>

</body>
</html>