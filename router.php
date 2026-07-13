<?php

declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$basePath = getenv('APP_BASE_PATH') ?: '';
if ($basePath !== '' && str_starts_with($path, $basePath)) {
    $path = substr($path, strlen($basePath)) ?: '/';
}

$file = __DIR__ . $path;
if ($path !== '/' && is_file($file)) {
    return false;
}

if (is_dir($file) && is_file(rtrim($file, '/') . '/index.php')) {
    require rtrim($file, '/') . '/index.php';
    return true;
}

if ($path === '/') {
    require __DIR__ . '/index.php';
    return true;
}

require __DIR__ . '/404.php';
