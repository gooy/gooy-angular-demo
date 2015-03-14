/**
 * import your css files here
 *
 * for SPA just use jspm bundle to bundle the css into the js file, or use separateCSS to bundle it into a .css file
 * for MPA it's better to use link tags in the header for most css files to prevent FOUC.
 * unstyled content can be prevented that way bit there will still be visual buildup because the javascript.
 * the only way to prevent it is to hide elements until they are ready to be displayed.
 *
 * for now this page is setup for use with MPA and only pulls in the prism style at runtime.
 */
//import "bootstrap";
import "bootstrap/css/bootstrap.css!";
import "github:PrismJS/prism@gh-pages/themes/prism.css!";

//these are here to make sure they are included in the bundling process
import "gooy-angular";
import "gooy-angular-code";

export function configure(gooy) {

  //setup resources
  gooy
    .withComponent("gooy-angular-code")
  ;

  gooy.start().then(a => a.setRoot('app'));
}
