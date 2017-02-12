<k-timeline>
  <div class="mdl-layout__tab-panel" id="timeline">
    <section class="section--center mdl-grid">
      <k-timeline-article each="{ item in items }"></k-timeline-article>
    </section>
  </div>
  <script>
    this.items = [];

    this.on('mount', function(){
      var that = this;
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '170269703417592',
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
        FB.api(
          '/tohoku.kanagata',
          'GET',
          {
            "fields":"app_id,access_token,feed{message,story,link,likes,full_picture,name,permalink_url,source,updated_time}",
            'access_token': '170269703417592|mIDToPYYB1KGV46HhZnhuFbM-U0'
          },
          function(response) {
            that.items = response.feed.data;
            that.update();
          }
        );

      };

    })

  </script>
</k-timeline>
