<?php
/**
 * Created by PhpStorm.
 * User: florin
 * Date: 5/31/18
 * Time: 11:33 AM
 */

require_once 'vendor/autoload.php';

use Symfony\Component\Templating\PhpEngine;
use Symfony\Component\Templating\TemplateNameParser;
use Symfony\Component\Templating\Loader\FilesystemLoader;


$filesystemLoader = new FilesystemLoader(__DIR__.'/view/%name%');
$view = new PhpEngine(new TemplateNameParser(), $filesystemLoader);

echo $view->render('culori.html');
