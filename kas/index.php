<?php
$uriSegments = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if ($uriSegments[1] === '') {
    require_once ('trang-chu.php');
} elseif ($uriSegments[1] === 'huong-dan-su-dung') {
    require_once ('huong-dan.php');
}