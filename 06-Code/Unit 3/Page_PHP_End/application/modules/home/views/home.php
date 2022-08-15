

									<div class="VideoPane VideoPane--fadeBottom VideoPane--disabled" media-wide="VideoPane--underSiteNav !VideoPane--disabled">
									<div class="VideoPane-bg">
									<video class="VideoPane-video" src="<?= $template['location'].'assets/images/78LC0HRQHTBL1645217941432.mp4'; ?>" data-src="<?= $template['location'].'assets/images/78LC0HRQHTBL1645217941432.mp4'; ?>" loop="loop" muted="muted" autoplay="autoplay" playsinline="playsinline"></video>
									<div class="VideoPane-overlay"></div>
									<div class="VideoPane-fallback BackgroundVideo-fallback" style="background-image: url('<?= $template['location'].'assets/images/banner-principal.jpg'; ?>');"></div>
									</div>
									<div class="VideoPane-content">
									<div class="gutter-normal gutter-negative" media-wide="hide">
									<div class="Art Art--fadeBottom" style="margin-bottom:-52.5%;">
									<div class="Art-size" style="padding-top:90%"></div>
									<div class="Art-image" style="background-image:url('<?= $template['location'].'assets/images/banner-principal.jpg'; ?>');"></div>
									<div class="Art-overlay"></div>
									</div>
									</div>
									<div class="hide" media-wide="!hide">
									<div class="space-huge"></div>
									<div class="space-large"></div>
									</div>
									<div class="align-left">
									<div media-small="gutter-vertical" media-large="!gutter-vertical">
									<div class="align-center" media-wide="!align-center">
									<h1 class="margin-none font-semp-xxxLarge-white text-upper">Moonshard WoW</h1>
									<div class="contain-masthead" media-wide="contain-left">
									<div class="space-rhythm-medium"></div>
									<p class="margin-none font-bliz-light-medium-beige">Nuestro objetivo es crear una comunidad muy grande para revivir todo el contenido de la expansión, con todas las mazmorras, bandas, bgs y arenas funcionando al 100%, contamos con un servidor Blizzlike e Instant 85.
									</p>
									<div class="space-rhythm-medium">
									</div>
									<div class="space-rhythm-large"></div>
									<div class="List List--gutters List--center List--vertical" media-large="!List--vertical" media-wide="!List--center List--left">
									<a class="Link Button Button--ghost Panel-button" href="<?= base_url('changelog'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" data-text="Server Info">Changelogs</div>
									</div>
									</div>
									</a>
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('register'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" data-text="Join Now">Join Now</div>
									</div>
									</div>
									</a>
									<p> </p>
									</div>
									</div></div>
									</div></div>									    
									<div class="hide" media-wide="!hide">
									<div class="space-huge"></div>
									<div class="space-large"></div>
									<div class="space-large"></div>
									

									</div>

            <?php if ($this->wowmodule->getNewsStatus()): ?>
           
									<div class="List List--gutters">
									<div class="List-item font-semp-small-white text-upper">Últimas noticias &amp; actualizaciones</div>
            
              
              
                </div>
                
                    
                    <div class="Grid Grid--gutter Grid--gutters">
					<?php foreach ($NewsList as $news): ?>
					<div class="Grid-1of4" style="width:385px">
					<div class="ArticleTile">
					<div class="ArticleTile-content">
					<div class="Tile ArticleTile-tile">
					<div class="Tile-area">
					
					<div class="Tile-bg" style="background-image: url(&quot;<?= base_url('assets/images/news/'.$news->image); ?>&quot;);">
					</div>
					<div class="Tile-content">
					</div></div></div>
					<div class="ArticleTile-fade"></div>
					<div class="ArticleTile-play">
					<div class="ArticleTile-playArrow"></div></div>
					<div class="ArticleTile-bottom">
					<div class="ArticleTile-bottomInner">
					<div class="ArticleTile-left">
					
					<div class="ArticleTile-title"><?= $news->title ?></div>
					</div><div class="ArticleTile-right"></div></div></div>
					<a href="<?= base_url('news/'.$news->id) ;?>" class="Link ArticleTile-link Link--cursor">
					
					</a></div></div></div>
					
                 
                
              
              <?php endforeach ?>
             </div>
            <?php endif ?>
          </div>












</div></div>
<div class="Divider"></div>
<div class="Pane Pane--cropHuge" data-url="<?= $template['assets'].'core/css/images/Pane-dirtLight.18def74ed60ab9f1f4139f87349d2f79.jpg'; ?>" id="news" queryselectoralways="31">
<div class="Pane-bg" style="background-color:#010d18;background-image:url(&quot;<?= $template['assets'].'core/css/images/Pane-dirtLight.18def74ed60ab9f1f4139f87349d2f79.jpg'; ?>&quot;);">
<div class="Pane-overlay"></div></div><div class="Pane-content">
<br></br>
    <div data-v-15d61d2e="" data-v-f8e77416="" id="social-settings-card" class="card mt-card-top social-settings" data-blz-addressable-by="social-settings">
      <div class="uk-container">
          
		  
		  
		  
          <div class="uk-width-3-3@s">
            <?php if($this->wowmodule->getRealmStatus()): ?>
            <h4 class="uk-h4 uk-text-bold"><i class="fas fa-server fa-sm"></i> <?= $this->lang->line('home_server_status'); ?></h4>
            <div class="uk-grid uk-grid-small uk-child-width-1-1 uk-margin-small" data-uk-grid>
              <?php foreach ($realmsList as $charsMultiRealm): 
                $multiRealm = $this->wowrealm->getRealmConnectionData($charsMultiRealm->id);
              ?>
              <div>
                <div class="uk-card uk-card-default uk-card-body card-status">
                  <div class="uk-grid uk-grid-small" data-uk-grid>
                    <div class="uk-width-expand">
                      <h5 class="uk-h5 uk-text-bold uk-margin-small"><a href="<?= base_url('online'); ?>" class="uk-link-reset"><i class="fas fa-server"></i> <?= $this->lang->line('table_header_realm'); ?> <?= $this->wowrealm->getRealmName($charsMultiRealm->realmID); ?></a></h5>
                    </div>
                    <div class="uk-width-auto">
                      <?php if ($this->wowrealm->RealmStatus($charsMultiRealm->realmID, $this->wowrealm->realmGetHostname($charsMultiRealm->realmID))): ?>
                        <div class="status-dot online" uk-tooltip="<?= $this->lang->line('online'); ?>"><span><span></span></span></div>
                      <?php else: ?>
                        <div class="status-dot offline" uk-tooltip="<?= $this->lang->line('offline'); ?>"><span><span></span></span></div>
                      <?php endif ?>
                    </div>
                  </div>
                  <?php if ($this->wowrealm->RealmStatus($charsMultiRealm->realmID, $this->wowrealm->realmGetHostname($charsMultiRealm->realmID))): ?>
                  <div class="uk-grid uk-grid-collapse uk-margin-small" data-uk-grid>
                    <div class="uk-width-2-2">
                      <div class="uk-tile alliance-bar uk-text-center" uk-tooltip="<?= $this->lang->line('faction_alliance'); ?>">
                        <i class="fas fa-users"></i>
                        <?= $this->wowrealm->getCharactersOnlineAlliance($multiRealm); ?>
                      </div>
                    </div>
                    <div class="uk-width-1-2">
                      <div class="uk-tile horde-bar uk-text-center" uk-tooltip="<?= $this->lang->line('faction_horde'); ?>">
                        <i class="fas fa-users"></i>
                        <?= $this->wowrealm->getCharactersOnlineHorde($multiRealm); ?>
                      </div>
                    </div>
                  </div>
                  <?php else: ?>
                  <p class="uk-text-small uk-margin-small"><i class="fas fa-exclamation-circle"></i> <?= $this->lang->line('home_realm_info'); ?> <span class="uk-text-danger uk-text-bold uk-text-uppercase"><?= $this->lang->line('offline'); ?></span></p>
                  <?php endif ?>
                </div>
              </div>
              <?php endforeach ?>
            </div>
            <h5 class="uk-h5 uk-text-center uk-margin">
              <?php if ($this->wowgeneral->getExpansionAction() == 1): ?>
              <i class="fas fa-gamepad"></i> Set Realmlist <?= $this->config->item('realmlist'); ?>
              <?php else: ?>
              <i class="fas fa-gamepad"></i> Set Portal "<?= $this->config->item('realmlist'); ?>"
              <?php endif ?>
            </h5>
            <?php endif ?>
            <?php if ($this->wowmodule->getDiscordStatus() == '1' && $this->config->item('discord_type') == '1'): ?>
            <h4 class="uk-h4 uk-text-bold"><i class="fab fa-discord fa-sm"></i> <?= $this->lang->line('home_discord'); ?></h4>
            <div class="uk-text-center uk-margin-small">
              <a target="_blank" class="discord-widget" href="https://discord.gg/<?= $this->config->item('discord_invitation'); ?>" title="Join us on Discord">
                <img src="https://discord.com/api/guilds/<?= $discord_id ?>/widget.png?style=<?= $this->config->item('discord_style'); ?>">
              </a>
            </div>
            <?php endif ?>
            <?php if ($this->wowmodule->getDiscordStatus() == '1' && $this->config->item('discord_type') == '2'): ?>
            <h4 class="uk-h4 uk-text-bold"><i class="fab fa-discord fa-sm"></i> <?= $this->lang->line('home_discord'); ?></h4>
            <div class="uk-text-center uk-margin-small">
              <iframe src="https://discordapp.com/widget?id=<?= $discord_id ?>&theme=dark" width="300" height="300" allowtransparency="true" frameborder="0"></iframe>
            </div>
            <?php endif ?>
          </div>
        </div>
      </div>
    </div></div>
	
	
									<div class="page-Guide-section1of2" data-test-id="e6d0c3c0384ce73be5fe66a58e23f9ec">
									<div class="Divider"></div>
									<div class="Grid Separator SyncHeight" media-small="Separator--vertical" media-wide="!Separator--vertical">
									<div class="Grid-col" media-wide="Grid-1of2">
									<a class="Link Link--block Panel Panel--link Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" media-wide="hide" style="cursor: default;">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/ARLKM85MIW311594741722890.jpg'; ?>">									
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">¿Nuevo en World of Warcraft?</h3>
									<h2 class="Panel-title">Comienza tu aventura</h2>
									<div class="Content Content--onDark Panel-desc">
									<span>¡Comienza tu viaje en el mejor servidor privado de World of Warcraft!</span>
									</div>
									<div class="Panel-buttons">
									</div>
									</div>
									</div>
									</div>
									</a>
									<a class="Link Link--block Panel Panel--link bordered hide Panel--tiny Panel--stacked Panel--stretched Panel--alignCenter Panel--overflowing" style="cursor: default;" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/QS8QDZEEPAJZ1591728956978.jpg'; ?>">
									<div class="Panel-fg">
									<div class="Position" style="width:100%;height:calc(100% + 29px);top:-29px;right:0%;bottom:0%;left:0%;">
									<div class="Art Art--fitToHeight">
									<div class="Art-size" style="padding-top:33.666666666666664%"></div>
									<div class="Art-image" style="background-image:url(<?= $template['location'].'assets/images/BDMOXH9OQ6B31594740408177.png'; ?>);"></div>
									<div class="Art-overlay">
									</div></div>
									</div></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">¿Nuevo en World of Warcraft?</h3>
									<h2 class="Panel-title">Comienza tu aventura</h2>
									<div class="Content Content--onDark Panel-desc">¡Comienza tu viaje en el mejor servidor privado de World of Warcraft!</div>
									<div class="Panel-buttons">
									</div></div>
									</div></div>
									</a></div>
									<div class="Grid-col" media-wide="Grid-1of2">
									<a class="Link Link--block Panel Panel--link Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" href="forum" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/SCVKZC3QVGFW1594741716280.jpg'; ?>"></div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Jugadores que regresan</h3>
									<h2 class="Panel-title">Bienvenido de Nuevo al Servidor <?= $this->config->item('website_name'); ?></h2>
									<div class="Content Content--onDark Panel-desc">Aprende cómo volver al juego y jugar el contenido de Cataclysm en <?= $this->config->item('website_name'); ?>.</div>
									<div class="Panel-buttons"></div>
									</div></div>
									</div></a>
									<a class="Link Link--block Panel Panel--link bordered hide Panel--tiny Panel--stacked Panel--stretched Panel--alignCenter Panel--overflowing" href="forum" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/ATDGB78UR6T41594224494516.jpg'; ?>">
									<div class="Panel-fg"><div class="Position" style="width:100%;height:calc(100% + 50px);top:-50px;right:0%;bottom:0%;left:0%;">
									<div class="Art Art--fitToHeight">
									<div class="Art-size" style="padding-top:35.41666666666667%"></div>
									<div class="Art-image" style="background-image:url(<?= $template['location'].'assets/images/ETA7LQVBODH61594740917046.png'; ?>);"></div>
									<div class="Art-overlay">
									</div></div>
									</div></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">									
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Jugadores que regresan</h3>
									<h2 class="Panel-title">Bienvenido de Nuevo al Servidor <?= $this->config->item('website_name'); ?></h2>
									<div class="Content Content--onDark Panel-desc">Aprende cómo volver al juego y jugar el contenido de Cataclysm en <?= $this->config->item('website_name'); ?>.</div>
									<div class="Panel-buttons">
									</div></div>
									</div></div>
									</a></div>
									</div></div>									
									<div class="page-Guide-section position-relative">
									<div class="Divider"></div>
									<div class="Panel Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/4T9967AYCIXD1615485388542.jpg'; ?>">
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Empieza creandote un nuevo personaje</h3>
									<h2 class="Panel-title">Aquí encontraras una guía</h2>
									<div class="Panel-buttons">
									<button class="Link Button Button--ghost Panel-button">
									<div class="Button-outer">
									<div class="Button-inner">
									<!--<a href="<?= base_url('forum'); ?>"><div class="Button-label" data-text="Watch Now">Forum</div></a> -->
									<a><div class="Button-label" data-text="Watch Now">Proximamente</div></a>
									</div></div>
									</button>
									</div></div>
									</div></div>
									</div>
									<div class="Panel bordered hide Panel--tiny Panel--stretched Panel--right Panel--alignRight Panel--overflowing" media-wide="!hide" media-huge="!Panel--stretched">
										<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/new-character.jpg'; ?>">
									<div class="Panel-fg">
									</div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Empieza creandote un nuevo personaje</h3>
									<h2 class="Panel-title">Aquí encontraras una guía</h2>
									<button class="Link Button Button--ghost Panel-button">
									<div class="Button-outer">
									<div class="Button-inner">
									<a><div class="Button-label" data-text="Watch Now">Proximamente</div></a>
									</div></div>
									</button></div>
									</div></div>
									</div></div>
									<div class="page-Guide-section position-relative">
									<div class="Divider"></div>
									<div class="Panel Panel--small Panel--alignCenter bordered Panel--stacked Panel--normal" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/V2AZDTNK6U371645557399008.jpg'; ?>"></div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">
									<span>Visita la tienda</span>
									</h3>
									<h2 class="Panel-title">¡Nuevos artículos de la tienda!</h2>
									<div class="Content Content--onDark Panel-desc">¡Puedes descubrir artículos nuevos y frescos en nuestra tienda por tiempo limitado!</div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Mira la tienda</div>
									</div>
									</div>
									</a>
									<a class="Link Button Button--ghost Panel-button" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Aprende más</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									<div class="Panel bordered hide Panel--normal Panel--stretched Panel--left Panel--alignLeft Panel--overflowing" media-wide="!hide" media-huge="!Panel--stretched">
										<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/QBB8FOCYHIJH1645557399036.jpg'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle"><span>Visita la tienda</span></h3>
									<h2 class="Panel-title">¡Nuevos artículos de la tienda!</h2>
									<div class="Content Content--onDark Panel-desc">¡Puedes descubrir artículos nuevos y frescos en nuestra tienda por tiempo limitado!</div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Mira la tienda</div>
									</div></div>
									</a>
									<a class="Link Button Button--ghost Panel-button" href="<?= base_url('store'); ?>" >
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Aprende más</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									</div>
									<div class="page-Guide-section position-relative">
									<div class="Divider"></div>
									<div class="Panel Panel--small Panel--alignCenter bordered Panel--stacked Panel--normal" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/LPQ2UZCZ5C5C1643131445223.png'; ?>"></div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Adalid</h3>
									<h2 class="Panel-title">Empieza a montar en <?= $this->config->item('website_name'); ?></h2>
									<div class="Content Content--onDark Panel-desc">Prepárate para ir a Terrallende con la montura que <strong>desees</strong>. </div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" data-text="Shop Now">Compra ahora</div>
									</div></div>
									</a>
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Servicios de personajes</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									<div class="Panel bordered hide Panel--normal Panel--stretched Panel--left Panel--alignLeft Panel--overflowing" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/MXPT7QDRA1FI1643131421634.png'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Adalid</h3>
									<h2 class="Panel-title">Empieza a montar en <?= $this->config->item('website_name'); ?></h2>
									<div class="Content Content--onDark Panel-desc">Prepárate para ir a Terrallende con la montura que <strong>desees</strong>.</div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>" >
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Compra ahora</div>
									</div></div>
									</a>
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" href="<?= base_url('store'); ?>">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Servicios de personajes</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									</div>
									<div class="page-Guide-section position-relative">
									<div class="Divider"></div>
									<div class="Panel Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/BQS2NO2GNOID1636671079429.jpg'; ?>"></div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h2 class="Panel-title">Pon a tu héroe al día</h2>
									<div class="Content Content--onDark Panel-desc">Nunca es demasiado tarde para unirte a tus amigos en sus últimas aventuras en Cataclysm con el nuevo Character Boost de nivel 85.</div>
									<a href="<?= base_url('store'); ?>">
									<div class="Panel-buttons">
									<button class="Link Button Button--ghost Panel-button" data-video="">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" data-text="Watch Now">Compra ahora</div>
									</div></div>
									</button>
									</div></a></div>
									</div></div>
									</div>
									<div class="Panel bordered hide Panel--tiny Panel--stretched Panel--right Panel--alignRight Panel--overflowing" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/ON3ZFILBWDPF1636669822904.jpg'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">									
									<div class="Panel-box">
									<div class="Panel-content">
									<h2 class="Panel-title">Pon a tu héroe al día</h2>
									<div class="Content Content--onDark Panel-desc">Nunca es demasiado tarde para unirte a tus amigos en sus últimas aventuras en Cataclysm con el nuevo Character Boost de nivel 85.</div>
									<div class="Panel-buttons">
									<a href="<?= base_url('store'); ?>">
									<button class="Link Button Button--ghost Panel-button" data-video="">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" data-text="Watch Now">Compra ahora</div>
									</div></div>
									</button></a></div>
									</div></div>
									</div></div>
									</div>
									<div class="page-Guide-section1of2">
									<div class="Divider">
									</div>
									<div class="Grid Separator SyncHeight" media-small="Separator--vertical" media-wide="!Separator--vertical">
									<div class="Grid-col" media-wide="Grid-1of2">
									<a class="Link Link--block Panel Panel--link Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" href="https://github.com/Jean-Dv/MoonShardWoW/blob/master/UpdateList" target="_blank" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/AO46ZIHLIQD31635275915817.jpg'; ?>">
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Parches</h3>
									<h2 class="Panel-title">Notas de actualización de contenido</h2>
									<div class="Panel-buttons"></div>
									</div></div>
									</div></a>
									<a class="Link Link--block Panel Panel--link bordered hide Panel--tiny Panel--stacked Panel--stretched Panel--alignCenter Panel--overflowing" href="https://github.com/Jean-Dv/MoonShardWoW/blob/master/UpdateList" target="_blank" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/AO46ZIHLIQD31635275915817.jpg'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Parches</h3>
									<h2 class="Panel-title">Notas de actualización de contenido</h2>
									<div class="Panel-buttons"></div>
									</div></div>
									</div></a>
									</div>
									<div class="Grid-col" media-wide="Grid-1of2">
									<a class="Link Link--block Panel Panel--link Panel--small Panel--alignCenter bordered Panel--stacked Panel--tiny" href="download" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/E05HQYQ5JP6G1574128274055.jpg'; ?>">
									</div>
									<div class="Panel-area SyncHeight-item"><div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Descargar</h3>
									<h2 class="Panel-title">WoW Launcher</h2>
									<div class="Panel-buttons"></div>
									</div></div>
									</div></a>
									<a class="Link Link--block Panel Panel--link bordered hide Panel--tiny Panel--stacked Panel--stretched Panel--alignCenter Panel--overflowing" href="download" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/download_wow_img.jpg'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Descargar</h3>
									<h2 class="Panel-title">WoW Launcher</h2>
									<div class="Panel-buttons"></div>
									</div></div>
									</div></a>
									</div></div>
									</div>
									<div class="page-Guide-section position-relative">
									<div class="Divider"></div>
									<div class="Panel Panel--small Panel--alignCenter bordered Panel--stacked Panel--normal" media-wide="hide">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/recruit_friend.jpg'; ?>"></div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Recompensas</h3>
									<h2 class="Panel-title">Recluta a un amigo</h2>
									<div class="Content Content--onDark Panel-desc">¡Traiga a sus amigos a Azeroth, aventúrense juntos y ganen recompensas épicas!</div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" >
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" >Próximamente</div>
									</div></div>
									</a>
									<a class="Link Button Button--ghost Panel-button">
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Próximamente</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									<div class="Panel bordered hide Panel--normal Panel--stretched Panel--left Panel--alignLeft Panel--overflowing" media-wide="!hide" media-huge="!Panel--stretched">
									<div class="Panel-bg" data-background-image="<?= $template['location'].'assets/images/recruit_friend.jpg'; ?>">
									<div class="Panel-fg"></div>
									</div>
									<div class="Panel-area SyncHeight-item">
									<div class="Panel-box">
									<div class="Panel-content">
									<h3 class="Panel-subtitle">Recompensas</h3>
									<h2 class="Panel-title">Recluta a un amigo</h2>
									<div class="Content Content--onDark Panel-desc">Traiga a sus amigos a Azeroth, aventúrense juntos y ganen recompensas épicas. ¡Obtenga beneficios y ventajas únicos en el juego con el nuevo programa, desde tiempo de juego hasta monturas y mascotas cuando sus amigos se unan a usted para luchar por la Alianza o la Horda!</div>
									<div class="Panel-buttons">
									<a class="Link Link--external Button Button--ghost Panel-button Button--purchase" >
									<div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label">Próximamente</div>
									</div></div>
									</a>
									<a class="Link Button Button--ghost Panel-button" ><div class="Button-outer">
									<div class="Button-inner">
									<div class="Button-label" >Próximamente</div>
									</div></div>
									</a></div>
									</div></div>
									</div></div>
									</div>
</div>
									</div>
									