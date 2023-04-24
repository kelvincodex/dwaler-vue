function head_script(src, async = false, defer = false) {
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    if (async){
        script.setAttribute('async', '');
    }
    if (defer){
        script.setAttribute('defer', '');
    }
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script)
}

function body_script(src, async = false, defer = false) {
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    if (async){
        script.setAttribute('async', '');
    }
    if (defer){
        script.setAttribute('defer', '');
    }
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script)
}

function del_script(src) {
    let el = document.querySelector("script[src='" + src + "']");
    if(el){ el.remove(); }
}


function head_link(href, rel = true) {

    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
        link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.head.appendChild(link)
}

function body_link(href) {
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.body.appendChild(link)
}

function del_link(href) {
    let el = document.querySelector("link[href='" + href + "']");
    if(el){ el.remove(); }
}

export {
    head_script,
    body_script,
    del_script,
    head_link,
    body_link,
    del_link,
}