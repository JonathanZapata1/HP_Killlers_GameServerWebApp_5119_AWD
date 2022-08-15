<div class="Pane Pane--underSiteNav Pane--cropFull" data-url="<?= $template['assets'].'core/css/images/dech7b4-261984f9-3751-478c-8733-e3e9429a2e5a.jpg'; ?>" media-medium="!hide" queryselectoralways="0 31" media-original="Pane Pane--underSiteNav Pane--cropFull hide">
<div class="Pane-bg" style="background-color:#041828;background-image:url(&quot;<?= $template['assets'].'core/css/images/dech7b4-261984f9-3751-478c-8733-e3e9429a2e5a.jpg'; ?>&quot;);">
<div class="Pane-overlay">
</div></div><div class="space-large"></div><div class="space-large"></div>
<div class="Pane-content">
<div class="space-large">
</div>
<div class="gutter-huge">
		<div class="uk-grid uk-grid-medium" data-uk-grid>
			<div class="uk-width-1-1">
				<div class="uk-width-auto ">
					<h4 class="uk-h4 uk-text-uppercase uk-text-bold" style="font-size:14px"><i class="fas fa-download"></i> Download</h4>
				</div>
				<div class="uk-width-expand@s">
					<div class="uk-child-width-1-1" uk-grid>
						<div class="uk-card uk-card-default">
							<div uk-grid>
								<div class="uk-width-auto@m">
									<ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
										<li style="font-size:14px"><a href="#" style="font-size:14px">Client</a></li>
										<li style="font-size:14px"><a href="#" style="font-size:14px">Addons</a></li>
									</ul>
								</div>
								<div class="uk-width-expand@m">
									<ul id="component-tab-left" class="uk-switcher">
										<li>
											<table class="uk-table uk-table-middle uk-table-divider">
												<thead>
													<tr>
														<th class="uk-width-small" style="font-size:14px">Version</th>
														<th class="uk-width-medium" style="font-size:14px">Name</th>
														<th style="font-size:14px">Size</th>
														<th style="font-size:14px">Type</th>
														<th style="font-size:14px">Download</th>
													</tr>
												</thead>
												<tbody>
													<?php foreach ($this->download_model->getGame()->result() as $files): ?>
													<tr>
														<td style="font-size:14px"><div style="background:url(<?=base_url('assets/images/forums/wow-icons/' . $files->image);?>); width: 50px; height: 50px;)"></div></td>
														<td style="font-size:14px"><?=$files->fileName?></td>
														<td style="font-size:14px"><?=$files->weight?></td>
														<td style="font-size:14px"><?=$files->type?></td>
														<td style="font-size:14px"><a class="uk-button uk-label-success uk-button-small" href="<?=$files->url?>" target="_blank"><i class="fas fa-download"></i> Download</a></td>
													</tr>
													<?php endforeach;?>
												</tbody>
											</table>
										</li>
										<li>
											<table class="uk-table uk-table-middle uk-table-divider">
												<thead>
													<tr>
														<th class="uk-width-small" style="font-size:14px">Version</th>
														<th class="uk-width-large" style="font-size:14px">Name</th>
														<th style="font-size:14px">Size</th>
														<th style="font-size:14px">Download</th>
													</tr>
												</thead>
												<tbody>
													<?php foreach ($this->download_model->getAddons()->result() as $files): ?>
													<tr>
														<td style="font-size:14px"><div style="background:url(<?=base_url('assets/images/forums/wow-icons/' . $files->image);?>); width: 50px; height: 50px;)"></div></td>
														<td style="font-size:14px"><?=$files->fileName?></td>
														<td style="font-size:14px"><?=$files->weight?></td>
														<td style="font-size:14px"><a class="uk-button uk-label-success uk-button-small" href="<?=$files->url?>" target="_blank"><i class="fas fa-download"></i> Download</a></td>
													</tr>
													<?php endforeach;?>
												</tbody>
											</table>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><div class="hide" media-wide="!hide">
									<div class="space-huge"></div>
									<div class="space-large"></div>
									<div class="space-large"></div>
									<div class="space-large"></div><div class="space-large"></div><div class="space-large"></div>

									</div>
</div>