
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('k-aboutus', '<div class="mdl-layout__tab-panel" id="list"> <section class="section--center mdl-grid"> <div class="mdl-cell mdl-cell--12-col"> <h4>注意事項</h4> <p>東北金型工業会サイト （以下 「当会サイト」 といいます） 及び当会サイト上に掲載される個々の文章・図形・デザイン、商標・ロゴマーク等に関する著作権その他の権利は、東北金型工業会 （以下 「当会」 といいます） または原著作者その他の権利者が有します。</p> <p>個人的な使用を目的として印字や保存等を行う場合、その他著作権法により認められる場合を除き、ウェブサイトのデータ等を当会または原著作者その他の権利者の許諾なく複製、送信、頒布、改変、切除等する行為は著作権法違反となりますので、事前に当会にご連絡の上、許諾を得ていただくようお願いいたします。</p> <h4>リンクポリシー</h4> <p>当会サイトへのリンクは、原則フリーといたしますので、リンクの可否についてご連絡頂く必要はありません。但し、リンクされている第三者サイトについて当会はリンクされているサイトおよびリンクしたサイトに対する内容について一切の責任を負いません。リンクの際は、ここで記述されている内容をご理解の上、遵守下さるようお願いします。ただし次のようなサイトからのリンクはお断り致します。</p> <ul> <li>公序良俗に反する内容を含んだサイトからのリンク。</li> <li>特定の個人や団体について誹謗中傷を行うサイトからのリンク。</li> <li>リンクによって当会サイトへアクセスする際に、利用者に課金するサイトからのリンク。</li> <li>違法なコンテンツを掲載したり、違法な活動に関与した、または関与した可能性のあるサイトからのリンク。</li> <li>その他、当会が不適当と判断するサイトからのリンク。</li> </ul> <h5>リンク時のガイドライン</h5> <p>当会の表記は「東北金型工業会」を用い、正しく表してください。</p> <h4>準拠法</h4> <p>当会サイトは東北金型工業会の管理下にあります。</p> <p>当会サイトは法律の異なる全世界の国々からアクセスすることが可能ですが、当会サイトにアクセスされた方および当会の両者は、かかる法律原理の違いに関わらず、当会サイトの利用に関して日本国の法律に拘束されることに同意するものとします。</p> <p>また当会は当会サイト上で、アクセスされた方の環境において当会サイトのコンテンツが適切であるかなどの記述や表示は一切行いません。当会サイトへのアクセスはアクセスされた方の自由意志によるものとし、当会サイトの利用に関しての責任はアクセスされた方にあるものとします。</p> <h4>免責事項</h4> <p>東北金型工業会は、本サーバ上の文書及びその内容に関し、いかなる保証もするものではありません。万一本サーバ上の文書の内容に誤りがあった場合でも当会は一切責任を負いかねます。</p> <p>また本サーバ上の文書に記載されている事項は予告なしに変更または中止されることがありますので、あらかじめご了承下さい。</p> </div> </section> </div>', '', '', function(opts) {
});

riot.tag2('k-footer', '<footer class="mdl-mega-footer"> <div class="mdl-mega-footer--middle-section"> <div class="mdl-mega-footer--drop-down-section"> <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked> <h1 class="mdl-mega-footer--heading">Features</h1> <ul class="mdl-mega-footer--link-list"> <li><a href="#">About</a></li> <li><a href="#">Terms</a></li> <li><a href="#">Partners</a></li> <li><a href="#">Updates</a></li> </ul> </div> <div class="mdl-mega-footer--drop-down-section"> <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked> <h1 class="mdl-mega-footer--heading">Details</h1> <ul class="mdl-mega-footer--link-list"> <li><a href="#">Spec</a></li> <li><a href="#">Tools</a></li> <li><a href="#">Resources</a></li> </ul> </div> <div class="mdl-mega-footer--drop-down-section"> <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked> <h1 class="mdl-mega-footer--heading">Technology</h1> <ul class="mdl-mega-footer--link-list"> <li><a href="#">How it works</a></li> <li><a href="#">Patterns</a></li> <li><a href="#">Usage</a></li> <li><a href="#">Products</a></li> <li><a href="#">Contracts</a></li> </ul> </div> <div class="mdl-mega-footer--drop-down-section"> <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked> <h1 class="mdl-mega-footer--heading">FAQ</h1> <ul class="mdl-mega-footer--link-list"> <li><a href="#">Questions</a></li> <li><a href="#">Answers</a></li> <li><a href="#">Contact us</a></li> </ul> </div> </div> <div class="mdl-mega-footer--bottom-section"> <div class="mdl-logo"> More Information </div> <ul class="mdl-mega-footer--link-list"> <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li> <li><a href="#">Help</a></li> <li><a href="#">Privacy and Terms</a></li> </ul> </div> </footer>', '', '', function(opts) {
});

riot.tag2('k-header', '<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"> <header class="mdl-layout__header"> <div class="mdl-layout__header-row"> <span class="mdl-layout-title">東北金型工業会</span> <div class="mdl-layout-spacer"></div> <nav class="mdl-navigation mdl-layout--large-screen-only"> <a class="mdl-navigation__link" href="/">投稿一覧</a> <a class="mdl-navigation__link" href="#/list/">会員名簿一覧</a> <a class="mdl-navigation__link" href="#/maps/">工場マップ</a> <a class="mdl-navigation__link" href="#/aboutus/">工業会について</a> </nav> </div> </header> <div class="mdl-layout__drawer"> <span class="mdl-layout-title">東北金型工業会</span> <nav class="mdl-navigation"> <a class="mdl-navigation__link" href="/">投稿一覧</a> <a class="mdl-navigation__link" href="#/list/">会員名簿一覧</a> <a class="mdl-navigation__link" href="#/maps/">工場マップ</a> <a class="mdl-navigation__link" href="#/aboutus/">工業会について</a> </nav> </div> </div>', '', '', function(opts) {
});

riot.tag2('k-history', '<h4 class="title">昭和 43 年</h4> <p class="text13"><b>2/18</b><br> 東北金型工業会設立懇談会<br> 設立準備委員出席者<br> 石橋プレス工業(株)社長 石橋隆純氏<br> (株)今野工業所社長 今野啓吾<br> (株)長井製作所社長 横山薫一氏<br> 小林工業(株)社長 小林忠彦<br> ほか仙台通算局より2名</p> <p class="text13"><b>3/18</b><br> 設立総会準備委員会<br> 設立趣意書、会則、役員案の作成</p> <p class="text13"><b>4/22</b><br> 設立総会<br> 「役員」<br> 会長 石橋プレス工業(株)社長 石橋隆純<br> 副会長 (株)今野工業所社長 今野啓吾<br> ハッピー金型工業(株)社長 原田孝一<br> 小林工業(株)社長 小林忠彦<br> 会計 有渡辺製作所社長 渡辺喜司<br> 会計監事 小林工業(株)<br> 事務局 有渡辺製作所<br> 顧問 明広商事(株)社長 高橋清一郎<br> 会員22名</p> <h4 class="title">昭和 48 年</h4> <p class="text13"><b>7/17</b><br> 東北機会工業会技術研修所実行委員会<br> 議題<br> 1 経過報告<br> 2 研修所工事および関連事項の推進について</p> <h4 class="title">昭和 49 年</h4> <p class="text13"><b>6/10</b><br> 上棟式</p> <p class="text13"><b>11/18</b><br> 落成式および開講式</p> <h4 class="title">昭和 55 年</h4> <p class="text13"><b>11/13-14</b><br> 国内研修会<br> 核燃料製造工程見学<br> 鎌倉、横浜見学</p> <h4 class="title">昭和 56 年</h4> <p class="text13"><b>11/18-23</b><br> 海外研修旅行<br> シンガポール金型関連企業視察</p> <h4 class="title">昭和 57 年</h4> <p class="text13"><b>10/9-12</b><br> 海外研修視察（韓国）<br> 韓国金型工具工業組合と懇談。工場および金型技術養成研究院など視察 </p> <h4 class="title">昭和 59 年</h4> <p class="text13"><b>11/20-24</b><br> 海外研修視察（台湾）<br> 愛徳克股?（和泉電気）、西尾股?有限公司（西尾金型工業）、台湾柳沼工業（柳沼プレス工業）、哈林精機、通用工具（日本扶桑軽合金）などを見学</p> <h4 class="title">昭和 61 年</h4> <p class="text13"><b>4/11</b><br> 創立20周年記念事業実行委員会を組織<br> 1回目の実行委員会を開き、委員長に大研工業(株)社長今野宗禅氏を選出、以後月1回の実行委員会を開いて記念事業計画の具体化を図ることを決める。</p> <h4 class="title">昭和 62 年</h4> <p class="text13"><b>5/21</b><br> 創立20周年記念式典<br> 実行委員会<br> 委員長 大研工業(株)<br> 副委員長 柳下精工(株)<br> (株)松本金型技研<br> (株)遠藤精工</p> <h4 class="title">昭和 63 年</h4> <p class="text13"><b>11/21-24</b><br> 海外研修視察 韓国金型関連企業視察<br> ・工業視察 韓国開成工業(株)、(株)利和産機、(株)三又精機、(株)東成企業</p> <h4 class="title">平成 3 年</h4> <p class="text13"><b>11/13-17</b><br> 海外研修視察 マレーシア<br> ・工場視察 TDK <br> SDM.BHD.SANKOKASEI(M)SDM.BHD.IZUTEX SDM.BHD.<br> 正藝機械工程有限公司</p> <h4 class="title">平成 5 年</h4> <p class="text13"><b>10/6-9</b><br> 海外研修<br> 研修先 韓国太田EXPO93見学</p> <h4 class="title">平成 6 年</h4> <p class="text13"><b>11/10-14</b><br> ドイモイの国ベトナムの工場見学<br> (1)VIETORONICS-BINH HOA：家電メーカー<br> (2)VIETNAM PLASTIC CORP：プラスティック日用品<br> (3)VINABICO-KOTOBUKI：菓子製造（日本投資会社）<br> (4)ホーチミン市商工会議所訪問</p> <h4 class="title">平成 8 年</h4> <p class="text13"><b>9/15-22</b><br> 海外研修<br> 研修先：北欧（スウェーデン、ノルウェー、デンマーク）三ヶ国<br> 訪問先<br> CEPA PRESSTEKNIK社 深絞り加工<br> ELECTROLUX WASCATOR社 家電メーカー、業務用洗濯機は世界の40%シェアーを有している。<br> AP&amp;T社 LABAN TRANEMO社 油圧機械、自動機器製造<br> ウッデホルム者 世界的な特殊鋼メーカー</p> <p class="text13"><b>12/24</b><br> 30周年記念実行委員会発足</p>', '', '', function(opts) {
});

riot.tag2('k-list', '<div class="mdl-layout__tab-panel" id="list"> <section class="section--center mdl-grid"> <div class="mdl-cell mdl-cell--12-col"> <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp"> <thead> <tr> <th class="no">No.</th> <td class="name_company">会社名</td> <td class="office">工場・営業所</td> <td class="name_president">代表者名</td> <td class="position_president">役職</td> <td class="zipcode">郵便番号</td> <td class="address">住所</td> <td class="phone">電話番号</td> <td class="fax">Fax番号</td> <td class="charge">代表者・担当者名</td> <td class="position_charge">役職</td> <td class="description">営業内容</td> <td class="email">e-mailアドレス</td> <td class="homepage">ホームページ</td> </tr> </thead> <tbody> <tr each="{item in items}"> <td class="no">{item.no}</td> <td class="mdl-data-table__cell--non-numeric name_company">{item.name_company}</td> <td class="mdl-data-table__cell--non-numeric office">{item.office}</td> <td class="mdl-data-table__cell--non-numeric name_president">{item.name_president}</td> <td class="mdl-data-table__cell--non-numeric position_president">{item.position_president}</td> <td class="mdl-data-table__cell--non-numeric zipcode">{item.zipcode}</td> <td class="mdl-data-table__cell--non-numeric address">{item.address}</td> <td class="mdl-data-table__cell--non-numeric phone">{item.phone}</td> <td class="mdl-data-table__cell--non-numeric fax">{item.fax}</td> <td class="mdl-data-table__cell--non-numeric charge">{item.charge}</td> <td class="mdl-data-table__cell--non-numeric position_charge">{item.position_charge}</td> <td class="mdl-data-table__cell--non-numeric description">{item.description}</td> <td class="mdl-data-table__cell--non-numeric email">{item.email}</td> <td class="mdl-data-table__cell--non-numeric homepage">{item.homepage}</td> </tr> </tbody> </table> </div> </section> </div>', 'k-list table thead th,[data-is="k-list"] table thead th,k-list table thead td,[data-is="k-list"] table thead td{ text-align: center; font-weight: bold; } k-list table tbody td.address,[data-is="k-list"] table tbody td.address,k-list table tbody td.description,[data-is="k-list"] table tbody td.description{ white-space: normal; }', '', function(opts) {
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
});

riot.tag2('k-main', '<k-header></k-header> <main> <route></route> </main> <k-footer></k-footer>', '', '', function(opts) {
});

riot.tag2('k-maps', '<div class="mdl-layout__tab-panel" id="maps"> <div class="map_wrapper"> <div id="googlemap"></div> </div> </div>', '', '', function(opts) {
    this.on('mount', function(){
      var map = new GMaps({
        div: "#googlemap",
        lat: 35.710285,
        lng: 139.77714,
        zoom: 15,
      });
    });

});

riot.tag2('k-timeline-article', '<div class="demo-card-square mdl-card mdl-shadow--2dp"> <div class="mdl-card__title mdl-card--expand" riot-style="background-image:url({this.item.full_picture})"> <h2 class="mdl-card__title-text"><a href="{this.item.permalink_url}" target="_blank">{this.item.name}</a></h2> </div> <div class="mdl-card__supporting-text"> {this.item.message} </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="{this.item.permalink_url}"> View Updates </a> </div> </div>', '', 'class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone"', function(opts) {
});

riot.tag2('k-timeline', '<div class="mdl-layout__tab-panel" id="timeline"> <section class="section--center mdl-grid"> <k-timeline-article each="{item in items}"></k-timeline-article> </section> </div>', '', '', function(opts) {
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

});
});