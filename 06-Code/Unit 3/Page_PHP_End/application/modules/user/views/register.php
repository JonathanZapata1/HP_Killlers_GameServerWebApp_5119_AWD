<div class="VideoPane VideoPane--fadeBottom VideoPane--disabled" media-wide="VideoPane--underSiteNav !VideoPane--disabled">
									<div class="VideoPane-bg">
									<video class="VideoPane-video" src="<?= $template['location'].'assets/images/UH8JZNHE7BY71534102731470.mp4'; ?>" data-src="<?= $template['location'].'assets/images/78LC0HRQHTBL1645217941432.mp4'; ?>" loop="loop" muted="muted" autoplay="autoplay" playsinline="playsinline"></video>
									<div class="VideoPane-overlay"></div>
									<div class="VideoPane-fallback BackgroundVideo-fallback" style="background-image: url('<?= $template['location'].'assets/images/Q6V9DEIZUHX71534102728680.jpg'; ?>');"></div>
									</div>
									<div class="VideoPane-content">
									<div class="gutter-normal gutter-negative" media-wide="hide">
									<div class="Art Art--fadeBottom" style="margin-bottom:-52.5%;">
									<div class="Art-size" style="padding-top:90%"></div>
									<div class="Art-image" style="background-image:url('<?= $template['location'].'assets/images/Q6V9DEIZUHX71534102728680.jpg'; ?>');"></div>
									<div class="Art-overlay"></div>
									</div>
									</div>
									<div class="hide" media-wide="!hide">
									<div class="space-huge"></div>
									<div class="space-large"></div>
									</div>






      <div class="uk-container" style="background:rgb(0,0,0,0.1)">
        <h4 class="uk-h4 uk-heading-line uk-text-uppercase uk-text-bold uk-margin-small-bottom"><span><i class="fas fa-user-plus"></i> <?= lang('button_register'); ?></span></h4>
        <?php echo validation_errors('<div class="uk-alert-danger" uk-alert><a class="uk-alert-close" uk-close></a><p><i class="far fa-times-circle"></i> ', '</p></div>'); ?>
        <?php if(isset($msg_notification_account_already_exist)): ?>
          <div class="uk-alert-danger" uk-alert>
            <a class="uk-alert-close" uk-close></a>
            <p style="font-size:16px"><i class="far fa-times-circle"></i> <?= $msg_notification_account_already_exist; ?></p>
          </div>
        <?php endif; ?>
        <?php if(isset($msg_notification_used_email)): ?>
          <div class="uk-alert-danger" uk-alert>
            <a class="uk-alert-close" uk-close></a>
            <p style="font-size:16px"><i class="far fa-times-circle"></i> <?= $msg_notification_used_email; ?></p>
          </div>
        <?php endif; ?>
        <?= form_open(current_url()); ?>
        <div class="uk-margin uk-light">
          <label class="uk-form-label" style="font-size:16px"><?= lang('label_login_info'); ?></label>
          <div class="uk-form-controls">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><i class="fas fa-user fa-lg"></i></span>
              <input class="uk-input" type="text" name="username" id="register_username" pattern=".{3,}" title="3 characters minimum" placeholder="<?= lang('placeholder_username'); ?>" required>
            </div>
          </div>
        </div>
        <div class="uk-margin uk-light">
          <div class="uk-form-controls">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><i class="fas fa-envelope fa-lg"></i></span>
              <input class="uk-input" type="email" name="email" id="register_email" placeholder="<?= lang('placeholder_email'); ?>" required>
            </div>
          </div>
        </div>
        <div class="uk-margin uk-light">
          <div class="uk-form-controls">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><i class="fas fa-unlock-alt fa-lg"></i></span>
              <input class="uk-input" type="password" name="password" id="register_password" pattern=".{5,16}" title="5 characters minimum and maximum 16" placeholder="<?= lang('placeholder_password'); ?>" required>
            </div>
          </div>
        </div>
        <div class="uk-margin uk-light">
          <div class="uk-form-controls">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon"><i class="fas fa-lock fa-lg"></i></span>
              <input class="uk-input" type="password" name="confirm_password" id="register_repassword" pattern=".{5,16}" title="5 characters minimum and maximum 16" placeholder="<?= lang('placeholder_re_password'); ?>" required>
            </div>
          </div>
        </div>
        <div class="uk-grid uk-grid-small uk-grid-margin-small" data-uk-grid>
          <div class="uk-width-1-4@m">
            <?php if ($this->wowmodule->getreCaptchaStatus() == '1') : ?>
              <div class="uk-margin-small">
                <div class="g-recaptcha" data-sitekey="<?= $recapKey; ?>"></div>
              </div>
            <?php endif; ?>
          </div>
          <div class="uk-width-1-2@m"></div>
          <div class="uk-width-1-4@m">
            <button class="uk-button uk-button-default uk-width-1-1" id="button_register" type="submit"><i class="fas fa-user-plus"></i> <?= lang('button_register'); ?></button>
          </div>
        </div>
        <?= form_close(); ?>
      </div><div class="space-large"></div><div class="space-large"></div><div class="space-large"></div><div class="space-large"></div>
	  </div></div>

