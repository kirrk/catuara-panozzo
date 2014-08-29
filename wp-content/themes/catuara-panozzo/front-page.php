<?php get_header(); ?>

			<div id="content">
				<div class="left">
				<p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><img src="<?php echo get_stylesheet_directory_uri();?>/imgs/c-p-logo-web.png" /></a></p>
						<?php get_sidebar(); ?>
				</div>
				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">
								<section class="entry-content cf" itemprop="articleBody">
									<?php
										$img1 = get_post_meta($post->ID, 'img1', true);
										echo $img1;
										$overlay = get_post_meta($post->ID, 'overlay', true);
										echo $overlay;
									  the_content();
									?>
								</section> <?php // end article section ?>

								<footer class="article-footer cf">

								</footer>

								<?php comments_template(); ?>

							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
										<header class="article-header">
											<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>
							<?php endif; ?>
						</div>
				</div>
			</div>

<?php get_footer(); ?>
