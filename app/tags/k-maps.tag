<k-maps>
  <div class="mdl-layout__tab-panel" id="maps">
    <div class="map_wrapper">
      <div id="googlemap"></div>
    </div>
  </div>

  <script>
    this.on('mount', function(){
      var map = new GMaps({
        div: "#googlemap",
        lat: 35.710285,
        lng: 139.77714,
        zoom: 15,
      });
    });

  </script>
</k-maps>
