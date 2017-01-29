<k-list>
  <div class="mdl-layout__tab-panel" id="list">
    <section class="section--center mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="no">No.</th>
              <td class="name_company">会社名</td>
              <td class="office">工場・営業所</td>
              <td class="name_president">代表者名</td>
              <td class="position_president">役職</td>
              <td class="zipcode">郵便番号</td>
              <td class="address">住所</td>
              <td class="phone">電話番号</td>
              <td class="fax">Fax番号</td>
              <td class="charge">代表者・担当者名</td>
              <td class="position_charge">役職</td>
              <td class="description">営業内容</td>
              <td class="email">e-mailアドレス</td>
              <td class="homepage">ホームページ</td>
            </tr>
          </thead>
          <tbody>
            <tr each="{ item in items }">
              <td class="no">{ item.no }</td>
              <td class="mdl-data-table__cell--non-numeric name_company">{ item.name_company }</td>
              <td class="mdl-data-table__cell--non-numeric office">{ item.office }</td>
              <td class="mdl-data-table__cell--non-numeric name_president">{ item.name_president }</td>
              <td class="mdl-data-table__cell--non-numeric position_president">{ item.position_president }</td>
              <td class="mdl-data-table__cell--non-numeric zipcode">{ item.zipcode }</td>
              <td class="mdl-data-table__cell--non-numeric address">{ item.address }</td>
              <td class="mdl-data-table__cell--non-numeric phone">{ item.phone }</td>
              <td class="mdl-data-table__cell--non-numeric fax">{ item.fax }</td>
              <td class="mdl-data-table__cell--non-numeric charge">{ item.charge }</td>
              <td class="mdl-data-table__cell--non-numeric position_charge">{ item.position_charge }</td>
              <td class="mdl-data-table__cell--non-numeric description">{ item.description }</td>
              <td class="mdl-data-table__cell--non-numeric email">{ item.email }</td>
              <td class="mdl-data-table__cell--non-numeric homepage">{ item.homepage }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  <script>
    this.items = [];

    this.on('mount', function(){
      var that = this;

      fetch('https://script.google.com/macros/s/AKfycbxhy9mroqGpOnMT3JLUSpmdO4FPocOWdYcJY77fRSvpsfSQwrFQ/exec', {
        mode: 'cors'
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        that.items = json;
        that.update();
      });
    });
  </script>
  <style>
    :scope table thead th,
    :scope table thead td {
      text-align: center;
      font-weight: bold;
    }
    :scope table tbody td.address,
    :scope table tbody td.description {
      white-space: normal;
    }


  </style>
</k-list>
