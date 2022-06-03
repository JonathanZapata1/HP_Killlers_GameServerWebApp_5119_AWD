<?php
/*---------------------------------------------------------------------
Titulo del servidor
---------------------------------------------------------------------*/
$config['baseurl'] = "https://moonshard-wow.com/"; 
$config['page_title'] = "MoonShard-WoW";
$config['language'] = "spanish";
$config['supported_langs'] = [
	'english' => 'English',
	'persian' => 'Persian',
	'italian' => 'Italian',
	'chinese-simplified' => 'Chinese Simplified',
	'chinese-traditional' => 'Chinese Traditional',
	'swedish' => 'Swedish',
	'french' => 'French',
	'german' => 'German',
	'spanish' => 'Spanish',
	'korean' => 'Korean',
	'russian' => 'Russian'
];
/*---------------------------------------------------------------------
Solo Activar en caso de errores.
---------------------------------------------------------------------*/
$config['debug_mode'] = true; 
/*---------------------------------------------------------------------
Información del servidor
---------------------------------------------------------------------*/
$config['realmlist'] = 'logon.moonshward-wow.com';
$config['patch_location'] = 'https://drive.google.com/drive/folders/1YIHUszwPzPqPRe08hHBxDjebTrPS8MeL?usp=sharing';
$config['game_version'] = '4.3.4';
/*---------------------------------------------------------------------
Expansioón del servidor.
0 = Classic
1 = The Burning Crusade (TBC)
2 = Wrath of the Lich King (WotLK)
3 = Cataclysm
4 = Mist of Pandaria (MOP)
5 = Warlords of Draenor (WOD)
6 = Legion
---------------------------------------------------------------------*/
$config['expansion'] = '3';
/*---------------------------------------------------------------------
Core Usada:
0 = TrinityCore
---------------------------------------------------------------------*/
$config['server_core'] = 0;
/*---------------------------------------------------------------------
En caso de necesitar el sistema de autenttificación (NO FUNCIONA AUN)
---------------------------------------------------------------------*/
$config['battlenet_support'] = false;
/*---------------------------------------------------------------------
Sistema de encriptación (AUN NO FUNCIONA PORQUE LA SOURCE NO SE ACTUALIZA AL SISTEMA DE AC)
Requiere la extensión de php.ini extension=gmp
---------------------------------------------------------------------*/
$config['srp6_support'] = true; 
/*---------------------------------------------------------------------
Para desactivar el sistema de jugadores online (Estaba probando y lo que puse dio problemas a veces :c)
---------------------------------------------------------------------*/
$config['disable_top_players'] = false;
$config['disable_online_players'] = false;
$config['disable_changepassword'] = false;
/*---------------------------------------------------------------------
Ya que muchos jugadores crean varias cuentas, si se necesita activar que usen varios emails.
---------------------------------------------------------------------*/
$config['multiple_email_use'] = false;
/*---------------------------------------------------------------------
En la carpeta de templates, seguir el modelo de vista para insertar nuevos temas.
---------------------------------------------------------------------*/
$config['template'] = 'icecrown';
/*---------------------------------------------------------------------
Para configurar un servidor SMTP para recuperar cuentas (AUN NO FUNCIONA)
---------------------------------------------------------------------*/
$config['smtp_host'] = 'smtp1.example.com';
$config['smtp_port'] = 587;
$config['smtp_auth'] = true;
$config['smtp_user'] = 'user@example.com';
$config['smtp_pass'] = 'SECRET';
$config['smtp_secure'] = 'tls';
$config['smtp_mail'] = 'no-reply@example.com';
/*---------------------------------------------------------------------
Sistema de votaciones ----> Muy simple, funciona con una URL y una IMagen (me gusta usar ibb)
---------------------------------------------------------------------*/
$config['vote_system'] = true;
$config['vote_sites'] = array(
    array(
        'image' => 'http://www.top100arena.com/hit.asp?id=93137&c=WoW&t=2',
        'site_url' => 'http://www.top100arena.com/in.asp?id=93137'
    ),
    array(
        'image' => 'https://topg.org/topg.gif',
        'site_url' => 'https://topg.org/wow-private-servers/in-479394'
    ),
    array(
        'image' => 'http://www.xtremeTop100.com/votenew.jpg',
        'site_url' => 'http://www.xtremetop100.com/in.php?site=1132364316'
    )
);
/*---------------------------------------------------------------------
ESTE CÖDIGO ES COPIADO, ES FULL COPIA Y PEGA DE UNO QUE ENCONTRE PARA CAPTCHA

Se recomienda usar la extensión hCAPTCHA
    0) Image Captcha
    1) HCaptcha
    2) ReCaptcha v2
    +2) Desactivar captcha (NO FUNCIONA NO SE PORQUE :c)

Para activar ir a las paginas
    La key y secret para HCaptcha ir a https://hCaptcha.com/?r=6d4f9117ba12
    La key y secret para Recaptcha ir a https://www.google.com/recaptcha
Lenguajes de captcha
    https://docs.hcaptcha.com/languages
    https://developers.google.com/recaptcha/docs/language

Requiere la extensión de php.ini extension=gd2 
---------------------------------------------------------------------*/
$config['captcha_type'] = 1;
$config['captcha_key'] = 'a17e2492-4873-4750-b4bb-034395a13b09';
$config['captcha_secret'] = '0xCc2B0B6e75131B5Dc61998aa9E2B305711D8c856';
$config['captcha_language'] = 'es';
/*---------------------------------------------------------------------

La cuenta de Soap sirve para crear cuentas y demás, ya que usa una cuenta de Administrador para usar una serie de comandos, en especial para la Tienda.

    Comando de crear cuenta
    '.account create {USERNAME} {PASSWORD} {PASSWORD} {EMAIL}'

    Comando cambiar contraseña
    account set password {USERNAME} {PASSWORD} {PASSWORD}

Requiere la extensión de php.ini extension=gd2
---------------------------------------------------------------------*/
$config['soap_for_register'] = false;
$config['soap_host'] = '127.0.0.1';
$config['soap_port'] = '7878';
$config['soap_uri'] = 'urn:TC';
$config['soap_style'] = 'SOAP_RPC';
$config['soap_username'] = 'sebaslove';
$config['soap_password'] = 'sebasloveqtx';
$config['soap_ca_command'] = 'account create {USERNAME} {PASSWORD}';
$config['soap_cp_command'] = 'account set password {USERNAME} {PASSWORD} {PASSWORD}';
$config['soap_asa_command'] = 'account set addon {USERNAME} {EXPANSION}';
/*---------------------------------------------------------------------
Autentificación de dos factores con el correo electrónico (NO FUNCIONA TODAVIA)
---------------------------------------------------------------------*/
$config['2fa_support'] = false;
$config['soap_2d_command'] = 'account set 2fa {USERNAME} off';
$config['soap_2e_command'] = 'account set 2fa {USERNAME} {SECRET}';
/*---------------------------------------------------------------------
Información para la conexión de la base de datos de cuentas (auth)
---------------------------------------------------------------------*/
$config['db_auth_host'] = '127.0.0.1';
$config['db_auth_port'] = '3306';
$config['db_auth_user'] = 'cata';
$config['db_auth_pass'] = 'opelfox';
$config['db_auth_dbname'] = 'auth';
/*---------------------------------------------------------------------
Información para la conexión de la base de datos de persojaes (characters)
---------------------------------------------------------------------*/
$config['realmlists'] = array(
    "1" => array(
        'realmid' => 1, 
        'realmname' => "Moonshard",
        'db_host' => "127.0.0.1", 
        'db_port' => "3306", 
        'db_user' => "cata", 
        'db_pass' => 'opelfox', 
        'db_name' => "characters"
    )
);

$config['script_version'] = '2.0.2';
