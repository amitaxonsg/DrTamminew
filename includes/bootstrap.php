<?php

declare(strict_types=1);

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_set_cookie_params([
        'httponly' => true,
        'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
        'samesite' => 'Lax',
        'path' => '/',
    ]);
    session_start();
}

date_default_timezone_set('Asia/Singapore');

const CLINIC_NAME = 'Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic';
const CLINIC_SHORT_NAME = 'Dr Tammi Quek';
const CLINIC_PHONE_DISPLAY = '+65 6397 6637';
const CLINIC_PHONE_URI = '+6563976637';
const CLINIC_WHATSAPP_DISPLAY = '+65 9627 4893';
const CLINIC_WHATSAPP_URI = '6596274893';
const CLINIC_ADDRESS_LINE_1 = '10 Sinaran Drive';
const CLINIC_ADDRESS_LINE_2 = '#10-12 Novena Medical Center';
const CLINIC_ADDRESS_LINE_3 = 'Singapore 307506';

function env_value(string $key, string $default = ''): string
{
    $value = getenv($key);
    return $value === false ? $default : trim((string) $value);
}

function app_env(): string
{
    return env_value('APP_ENV', 'local');
}

function is_production(): bool
{
    return app_env() === 'production';
}

function base_path(): string
{
    $path = env_value('APP_BASE_PATH', '');
    if ($path === '' || $path === '/') {
        return '';
    }
    return '/' . trim($path, '/');
}

function site_url(string $path = ''): string
{
    $clean = trim($path);
    if ($clean === '' || $clean === '/') {
        return base_path() . '/';
    }
    return base_path() . '/' . ltrim($clean, '/');
}

function asset_url(string $path): string
{
    return site_url($path);
}

function canonical_url(string $path = ''): string
{
    $origin = rtrim(env_value('APP_CANONICAL_URL', 'https://drtammiquek.com/paediatrics-clinic'), '/');
    $clean = trim($path, '/');
    return $clean === '' ? $origin . '/' : $origin . '/' . $clean . '/';
}

function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function clinic_email(): string
{
    return env_value('CLINIC_EMAIL', '');
}

function kimi_chat_url(): string
{
    return env_value('KIMI_CHAT_URL', '');
}

function whatsapp_url(): string
{
    $message = rawurlencode('Hello, I would like to make an enquiry about Dr Tammi Quek’s clinic.');
    return 'https://wa.me/' . CLINIC_WHATSAPP_URI . '?text=' . $message;
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return (string) $_SESSION['csrf_token'];
}

function csrf_is_valid(?string $token): bool
{
    return is_string($token)
        && isset($_SESSION['csrf_token'])
        && hash_equals((string) $_SESSION['csrf_token'], $token);
}

function current_year(): string
{
    return date('Y');
}

function page_is(string $path): bool
{
    $requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
    $requestPath = '/' . trim(str_replace(base_path(), '', $requestPath), '/');
    $target = '/' . trim($path, '/');
    return $requestPath === $target || ($target !== '/' && str_starts_with($requestPath, $target . '/'));
}

function image_tag(string $src, string $alt, string $class = '', bool $priority = false): string
{
    $loading = $priority ? 'eager' : 'lazy';
    $fetch = $priority ? ' fetchpriority="high"' : '';
    $fallback = asset_url('assets/images/image-placeholder.svg');

    return sprintf(
        '<img src="%s" alt="%s" class="%s" loading="%s" decoding="async"%s data-fallback="%s">',
        e(asset_url($src)),
        e($alt),
        e($class),
        $loading,
        $fetch,
        e($fallback)
    );
}
