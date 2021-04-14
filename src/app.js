import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {homePage} from "./views/home.js";
import {logout} from "./api/data.js";
import {registerPage} from "./views/register.js";
import {loginPage} from "./views/login.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {editPage} from "./views/edit.js";
import {detailsPage} from "./views/details.js";
import {searchPage} from "./views/search.js";

const main = document.getElementById('main-content');

document.getElementById('logout-button').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/details/:id', decorateContext, detailsPage);
page('/search', decorateContext, searchPage);

setUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');

    if (email !== null) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = '';
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('user').style.display = 'none';
    }
}