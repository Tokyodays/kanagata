<k-main>
  <k-header></k-header>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <main class="mdl-layout__content">
      <route></route>
    </main>
    <k-footer></k-footer>
  </div>
  <script>
    riot.compile(function() {
      var
        Route = riot.router.Route,
        DefaultRoute = riot.router.DefaultRoute,
        NotFoundRoute = riot.router.NotFoundRoute,
        RedirectRoute = riot.router.RedirectRoute;

      riot.router.routes([
        new DefaultRoute({tag: 'k-timeline'}),
        new Route({path: '/', tag: 'k-timeline'}),
        new Route({path: '/list/', tag: 'k-list'}),
        new Route({path: '/maps/', tag: 'k-maps'})
      ]);
      route.start(true);
    });
  </script>
</k-main>
