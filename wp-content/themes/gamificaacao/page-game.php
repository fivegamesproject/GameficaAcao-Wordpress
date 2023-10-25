<?php

get_header();

?>




    <div class="left-col">

      <header>
        CSS Diner
        <div class="logo">
          <plate><apple /></plate>
        </div>
        <span class="share-menu">
          Share
          <a class="share-twitter" type="twitter" href="#"></a>
          <a class="share-facebook" type="facebook" href="#"></a>
          <a class="share-email" type="email" href="#"></a>
        </span>
      </header>

      <h2 class="order"></h2>

      <div class="note">
        <h3>No worries, you've got this!</h3>
        <p>
          You're about to learn CSS Selectors!
          Selectors are how you pick which element to apply styles to.
        </p>

        <h4>Exhibit 1 - A CSS Rule</h4>

        <pre>
p {
   margin-bottom: 12px;
}</pre>

        <p>
          Here, the "p" is the selector (selects all &lt;p&gt; elements) and applies the margin-bottom style.
        </p>
        <p>
          To play, type in a CSS selector in the editor below to select the correct items on the table.If you get it right, you'll advance to the next level.
        </p>
        <p>
          Hover over the items on the table to see their HTML markup.
        </p>
        <p>
          Get help with selectors on the right! &rarr;
        </p>
        <a class="note-toggle" href="#">Ok, got it!</a>
      </div>

      <a class="note-toggle" href="#">Help, I'm stuck!</a>

      <div class="game-wrapper">
        <div class="table-wrapper">
          <div class="table-surface"></div>
          <div class="nametags"></div>
          <div class="table"></div>
        </div>
        <div class="table-edge">
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>
      </div>

      <div class="editor">

        <div class="editor-pane">
          <div class="input-header">
            <div class="file-name">style.css</div> CSS Editor
          </div>
          <div class="file-window css-view">
            <div class="line-numbers">
              1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20
            </div>
              <input class="input-strobe" type="text" placeholder="Type in a CSS selector"/><span class="plus">+</span><div class="enter-button">enter</div>
            <div>
            {<br/>
            /* Styles would go here. */<br/>
            }
            </div>
            <div class="help">
              <br/>
              /* <br/>
              Type a number to skip to a level.<br/>
              Ex &rarr; "5" for level 5 <br/>*/
            </div>
          </div>
        </div>

        <div class="editor-pane html-view">
          <div class="input-header">
            <div class="file-name">table.html</div>
            HTML Viewer
          </div>
          <div class="file-window">
            <div class="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20</div>
            <div class="markup"></div>
          </div>
        </div>
      </div>


      <div class="helper"><!-- This is the popup that floats over table elements --></div>

    </div><!-- /left-col -->

    <div class="right-col">

      <div class="help-wrapper">

        <h1 class="level-header">
          <span class="level-text"></span>
          <span class="checkmark"></span>
        </h1>

        <div class="level-nav">
          <a class="previous" href="#"></a>
          <a class="next" href="#"></a>
        </div>

        <div class="level-progress"><div class="progress"></div></div>

        <div class="display-help">
          <h3 class="selector-name"></h3>
          <h2 class="title"></h2>
          <h3 class="syntax"></h3>
          <div class="hint"></div>
          <h4 class="examples-title">Examples</h4>
          <div class="examples"></div>
        </div>
      </div>

      <div class="level-menu">
        <h2>Choose a level</h2>
        <div class="levels"><!-- level links are inserted here--></div>
        <a class="reset-progress" href="#">Reset Progress</a>
      </div>

      <div class="level-menu-toggle-wrapper">
        <div class="level-menu-toggle"></div>
      </div>

    </div><!-- /right-col -->






    <script src="<?php echo esc_url( get_template_directory_uri() . '/assets/js/jquery.js');?>"  type="text/javascript" charset="utf-8"></script>
    <script src="<?php echo esc_url(get_template_directory_uri() . '/assets/js/levels.js');?>"  type="text/javascript" charset="utf-8"></script>
    <script src="<?php echo esc_url(get_template_directory_uri() . '/assets/js/restaurant.js');?>"  type="text/javascript" charset="utf-8"></script>
    <script src="<?php echo esc_url(get_template_directory_uri() . '/assets/js/jquery.mCustomScrollbar.min.js');?>"></script>
    <link href='https://fonts.googleapis.com/css?family=Exo+2:200,400,600,400italic,600italic' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo esc_url(get_template_directory() . '/assets/css/jquery.mCustomScrollbar.css');?>" type="text/css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="<?php echo esc_url(get_template_directory() . '/assets/css/style.css');?>" type="text/css" media="screen" title="no title" charset="utf-8">



<?php

// get_footer();
?>