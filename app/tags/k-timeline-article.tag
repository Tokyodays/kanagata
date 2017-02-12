<k-timeline-article class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand" style="background-image:url({ this.item.full_picture })">
      <h2 class="mdl-card__title-text"><a href="{ this.item.permalink_url }" target="_blank">{ this.item.name }</a></h2>
    </div>
    <div class="mdl-card__supporting-text">
      { this.item.message }
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="{ this.item.permalink_url }">
        View Updates
      </a>
    </div>
  </div>
</k-timeline-article>
